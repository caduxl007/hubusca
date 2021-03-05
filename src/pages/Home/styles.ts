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
  margin-top: 60px;
`;

export const HeaderContent = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  h2 {
    font-size: 2.5rem;
    line-height: 3rem;
    color: #212121;
    font-weight: 400;
  }

  > div {
    width: 11rem;
  }
`;

export const ContentNavers = styled.div`
  margin-top: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
`;
