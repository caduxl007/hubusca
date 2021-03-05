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
  z-index: 999;
  padding: 0 10px;

  display: flex;
  justify-content: center;
  align-items: center;

  animation: ${appearFromLeft} 0.3s;
`;

export const Modal = styled.div`
  max-width: 592px;
  width: 100%;
  min-height: 14rem;
  position: relative;

  padding: 30px;

  background-color: #fff;

  svg {
    position: absolute;
    right: 20px;
    width: 1.4rem;
    height: 1.4rem;
    cursor: pointer;
  }

  h2 {
    margin-top: 5px;
    font-weight: 600;
    font-size: 1.5rem;
    line-height: 2rem;
    color: #212121;
  }

  p {
    margin-top: 30px;
    font-size: 1rem;
    line-height: 2rem;
    font-weight: normal;
    color: #212121;
  }

  > div {
    margin-top: 20px;
    display: flex;
    justify-content: flex-end;

    button {
      width: 11rem;
    }

    button:nth-of-type(1) {
      background-color: white;
      border: 1px solid #212121;
      color: #212121;
      margin-right: 15px;
    }
  }
`;
