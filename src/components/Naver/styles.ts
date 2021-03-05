import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 23%;
  margin-bottom: 30px;

  button {
    height: 17.5rem;

    img {
      width: 90%;
      min-width: 17.5rem;
      height: 17.5rem;
    }
  }

  strong {
    font-weight: bold;
    margin: 10px 0;
    font-size: 1rem;
    line-height: 1.2rem;
    color: #212121;
  }

  > div {
    margin-top: 10px;

    svg {
      cursor: pointer;
    }

    svg:nth-of-type(2) {
      margin-left: 10px;
    }
  }

  @media (max-width: 1200px) {
    width: 33%;
  }

  @media (max-width: 856px) {
    width: 49%;
  }

  @media (max-width: 540px) {
    width: 99%;
    align-items: center;
  }
`;
