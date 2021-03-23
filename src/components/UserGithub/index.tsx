/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import { FiChevronRight } from 'react-icons/fi';

import { Container } from './styles';

interface IUser {
  login: string;
  avatar_url: string;
  name: string;
  location: string;
}

const UserGithub: React.FC<IUser> = ({ login, avatar_url, name, location }) => {
  return (
    <Container>
      <Link to={`/profile/${login}`}>
        <img src={avatar_url} alt={name} />

        <div>
          <strong>
            {name}({login})
          </strong>
          <p>{location}</p>
        </div>

        <FiChevronRight size={20} />
      </Link>
    </Container>
  );
};

export default UserGithub;
