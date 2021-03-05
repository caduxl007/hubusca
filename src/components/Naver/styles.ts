import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 23%;
  margin-bottom: 30px;

  button {
    height: 17.5rem;

    img {
      width: 17.5rem;
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

    svg:nth-of-type(2) {
      margin-left: 10px;
    }
  }
`;
