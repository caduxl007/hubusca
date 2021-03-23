import React, { useEffect, useState } from 'react';
import { useRouteMatch, useHistory } from 'react-router-dom';

import { UserInfo, Repositories } from './styles';

import api from '../../services/api';

import Header from '../../components/Header';
import Repository from '../../components/Repository';

interface IProfileParams {
  id: string;
}

interface IUser {
  id: string;
  login: string;
  avatar_url: string;
  name: string;
  location: string;
  followers: number;
  public_repos: number;
}

interface IRepository {
  full_name: string;
  description: string;
  html_url: string;
  language: string;
  pushed_at: Date;
  created_at: Date;
}

const Profile: React.FC = () => {
  const [user, setUser] = useState<IUser | null>(null);
  const [repositories, setRepositories] = useState<IRepository[]>([]);

  const { params } = useRouteMatch<IProfileParams>();
  const history = useHistory();

  useEffect(() => {
    async function loadUser(): Promise<void> {
      try {
        const response = await api.get(`users/${params.id}`);

        setUser(response.data);
      } catch (err) {
        history.push('/');
      }
    }

    loadUser();

    window.document.title = 'HUBusca | Profile';

    api.get(`users/${params.id}/repos`).then((response) => {
      setRepositories(response.data);
    });
  }, [params.id, history]);

  return (
    <>
      <Header goBack />
      {user && (
        <UserInfo>
          <header>
            <img src={user.avatar_url} alt={user.name} />
            <div>
              <strong>
                {user.name} ({user.login})
              </strong>
              <p>{user.location}</p>
            </div>
          </header>
          <ul>
            <li>
              <strong>{user.id}</strong>
              <span>ID</span>
            </li>
            <li>
              <strong>{user.followers}</strong>
              <span>Seguidores</span>
            </li>
            <li>
              <strong>{user.public_repos}</strong>
              <span>Repositórios públicos</span>
            </li>
          </ul>
        </UserInfo>
      )}

      <Repositories>
        {repositories.map((repository) => (
          <Repository
            key={repository.full_name}
            full_name={repository.full_name}
            html_url={repository.html_url}
            language={repository.language}
            description={repository.description}
            created_at={repository.created_at}
            pushed_at={repository.pushed_at}
          />
        ))}
      </Repositories>
    </>
  );
};

export default Profile;
