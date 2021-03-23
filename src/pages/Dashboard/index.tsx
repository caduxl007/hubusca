import React, { useState, FormEvent, useCallback, useEffect } from 'react';
import api from '../../services/api';

import { useApp } from '../../context/AppContext';

import UserGithub from '../../components/UserGithub';
import Header from '../../components/Header';

import { Title, Form, UserContainer, Error } from './styles';

interface IUser {
  id: string;
  login: string;
  avatar_url: string;
  name: string;
  location: string;
}

const Dashboard: React.FC = () => {
  const [newUser, setNewUser] = useState('');
  const [inputError, setInputError] = useState('');
  const [buttonState, setButtonState] = useState('Pesquisar');
  const [user, setUser] = useState<IUser | null>(null);

  const { addNewUser } = useApp();

  const handleAddUser = useCallback(
    async (event: FormEvent<HTMLFormElement>): Promise<void> => {
      event.preventDefault();

      if (!newUser) {
        setInputError('Digite o nome do usuário');
        return;
      }

      try {
        setButtonState('Carregando...');
        const response = await api.get<IUser>(`users/${newUser}`);

        setUser(response.data);
        setNewUser('');
        setInputError('');
        addNewUser(response.data);
      } catch (err) {
        setInputError('Erro na busca por esse usuário!');
      } finally {
        setButtonState('Pesquisar');
      }
    },
    [newUser, addNewUser],
  );

  useEffect(() => {
    window.document.title = 'HUBusca | Home';
  }, []);

  return (
    <>
      <Header goBack={false} />
      <Title>Busque usuários no GitHub</Title>

      <Form hasError={!!inputError} onSubmit={handleAddUser}>
        <input
          value={newUser}
          onChange={(e) => setNewUser(e.target.value)}
          placeholder="Digite o nome de usuário"
        />
        <button type="submit">{buttonState}</button>
      </Form>

      {inputError && <Error>{inputError}</Error>}

      <UserContainer>
        {user && (
          <UserGithub
            login={user.login}
            name={user.name}
            avatar_url={user.avatar_url}
            location={user.location}
          />
        )}
      </UserContainer>
    </>
  );
};

export default Dashboard;
