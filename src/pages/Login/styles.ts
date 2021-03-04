import styled from 'styled-components';

import logo from '../../assets/logo.png';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  width: 448px;
  height: 408px;
  border: 1px solid #212121;
  padding: 25px;

  form {
    div {
      width: 384px;
      margin-top: 40px;
      span {
        font-size: 1rem;
        color: #212121;
        font-weight: 600;
        line-height: 1.2rem;
      }
      input {
        display: block;
        margin-top: 4px;
        width: 384px;
        height: 40px;
        padding-left: 5px;
        border: 1px solid #424242;
      }
    }

    button {
      background: #212121;
      color: #fff;
      width: 100%;
      height: 40px;
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
