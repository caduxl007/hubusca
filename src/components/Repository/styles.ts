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

    div {
      margin: 0 5px;
      flex: 1;

      strong {
        font-size: 1.5rem;
        color: #3d3d4d;
      }

      p {
        font-size: 1rem;
        color: #777;
        margin-top: 4px;
      }

      > div {
        margin-top: 8px;
        display: flex;
        justify-content: space-between;
        align-items: center;

        p {
          font-size: 1rem;
          span {
            color: #222;
          }
        }
      }
    }

    svg {
      margin-left: auto;
      color: #cbcbd6;
    }
  }
`;
