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

export const Overlay = styled.div`
  background: rgba(0, 0, 0, 0.6);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  animation: ${appearFromLeft} 0.3s;
`;

export const Naver = styled.div`
  max-width: 1007px;
  width: 100%;
  display: flex;
  align-items: center;

  img {
    max-width: 31.4rem;
    width: 100%;
    height: 31.4rem;
  }
`;

export const InfoNaver = styled.div`
  background-color: white;
  padding: 25px 30px;
  flex: 1;
  height: 31.4rem;
  position: relative;

  > svg {
    position: absolute;
    right: 20px;
  }

  svg {
    width: 1.2rem;
    height: 1.2rem;
    cursor: pointer;
  }

  h2 {
    font-size: 1.5rem;
    line-height: 2rem;
    color: #000000;
    font-weight: 600;
  }

  strong {
    font-weight: bold;
    margin-top: 30px;
    display: block;
    line-height: 1.5rem;
  }

  p {
    font-weight: normal;
    font-style: normal;
    line-height: 1.5rem;
    margin-top: 10px;
  }

  > div {
    margin-top: 7rem;

    svg:nth-of-type(2) {
      margin-left: 15px;
    }
  }
`;
