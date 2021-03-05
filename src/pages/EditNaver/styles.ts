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

  @media (max-width: 560px) {
    margin: 70px auto 50px auto;
  }

  form {
    position: relative;
    > div {
      display: flex;
      justify-content: space-between;

      > div {
        margin-right: 10px;
        margin-top: 40px;

        @media (max-width: 560px) {
          margin-top: 25px;
          max-width: 100%;
        }
      }

      @media (max-width: 560px) {
        flex-direction: column;
      }
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
