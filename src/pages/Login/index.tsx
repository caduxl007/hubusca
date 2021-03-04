import React from 'react';

import { Container, Content, Logo } from './styles';

const Login: React.FC = () => {
  return (
    <Container>
      <Content>
        <Logo />
        <form action="">
          <div>
            <span>E-mail</span>
            <input id="name" type="text" placeholder="E-mail" />
          </div>

          <div>
            <span>Senha</span>
            <input type="text" placeholder="Senha" />
          </div>

          <div>
            <button type="button">Entrar</button>
          </div>
        </form>
      </Content>
    </Container>
  );
};

export default Login;
