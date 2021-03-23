import React, { useEffect } from 'react';

import { useApp } from '../../context/AppContext';

import Header from '../../components/Header';
import UserGithub from '../../components/UserGithub';

import { Container, Title, UsersContainer } from './styles';

const Recents: React.FC = () => {
  const { users } = useApp();

  useEffect(() => {
    window.document.title = 'HUBusca | Recentes';
  }, []);

  return (
    <Container>
      <Header goBack />
      <Title>Usuários buscados recentemente</Title>

      <UsersContainer>
        {users.length !== 0 ? (
          users.map((user) => (
            <UserGithub
              key={user.login}
              login={user.login}
              name={user.name}
              location={user.location}
              avatar_url={user.avatar_url}
            />
          ))
        ) : (
          <h2>Nenhum usuário buscado recentemente</h2>
        )}
      </UsersContainer>
    </Container>
  );
};

export default Recents;
