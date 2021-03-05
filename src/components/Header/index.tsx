import React from 'react';

import { useAuth } from '../../contexts/AuthContext';

import logo from '../../assets/logo.png';

import { Container } from './styles';

const Header: React.FC = () => {
  const { signOut } = useAuth();

  return (
    <Container>
      <img src={logo} alt="Logo" />
      <button onClick={signOut} type="button">
        Sair
      </button>
    </Container>
  );
};

export default Header;
