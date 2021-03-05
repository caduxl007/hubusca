import styled, { keyframes } from 'styled-components';

import logo from '../../assets/logo.png';

const appearFromRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(50px);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.7rem 1.4rem;

  animation: ${appearFromRight} 0.4s;
`;

export const Content = styled.div`
  max-width: 448px;
  width: 100%;
  border: 1px solid #212121;
  padding: 25px;

  form {
    > div,
    button {
      margin-top: 40px;
    }

    a {
      display: block;
      margin-top: 10px;
    }
  }
`;

export const Logo = styled.div`
  width: 200px;
  height: 60px;
  background-image: url(${logo});
  background-size: 100% auto;
  background-repeat: no-repeat;
  margin: 0 auto;
`;
