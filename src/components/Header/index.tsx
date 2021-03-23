import React from 'react';
import { FiChevronLeft, FiClock } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import logoImg from '../../assets/logo.png';

import { Container } from './styles';

interface IHeaderProps {
  goBack: boolean;
}

const Header: React.FC<IHeaderProps> = ({ goBack = true }: IHeaderProps) => {
  return (
    <Container>
      <img src={logoImg} alt="Github Explorer" />
      {goBack ? (
        <Link to="/">
          <FiChevronLeft size={20} />
          Voltar
        </Link>
      ) : (
        <Link to="/recentes">
          <FiClock size={20} />
          Recentes
        </Link>
      )}
    </Container>
  );
};

export default Header;
