import styled, { keyframes } from 'styled-components';

const appearFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0.7rem 1.4rem;

  animation: ${appearFromLeft} 1s;
`;

export const Content = styled.div`
  margin: 150px auto 0 auto;
  max-width: 790px;

  form {
    position: relative;
    > div {
      margin-top: 40px;
      display: flex;
      justify-content: space-between;
    }

    button {
      position: absolute;
      right: 0;
      margin-top: 40px;
      width: 11rem;
    }
  }
`;

export const HeaderContent = styled.header`
  display: flex;
  align-items: center;

  svg {
    width: 1.5rem;
    height: 1.5rem;
    font-weight: normal;
    cursor: pointer;
  }

  h2 {
    margin-left: 20px;
    font-size: 1.5rem;
    line-height: 2rem;
    font-weight: 600;
  }
`;
