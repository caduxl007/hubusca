import styled from 'styled-components';

export const Container = styled.div`
  a {
    background: #fff;
    border-radius: 5px;
    width: 100%;
    padding: 24px;
    display: block;
    text-decoration: none;

    display: flex;
    align-items: center;
    transition: transform 0.2s;

    &:hover {
      transform: translateX(10px);
    }

    & + a {
      margin-top: 16px;
    }

    img {
      width: 6rem;
      height: 6rem;
      border-radius: 50%;
    }

    div {
      margin: 0 16px;
      flex: 1;

      strong {
        font-size: 1.5rem;
        color: #3d3d4d;
      }

      p {
        margin-top: 8px;
        font-size: 1.2rem;
        color: #383636;
      }
    }

    svg {
      margin-left: auto;
      color: #cbcbd6;
    }
  }
`;
