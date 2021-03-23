import styled from 'styled-components';

export const UserInfo = styled.section`
  margin-top: 80px;

  header {
    display: flex;
    align-items: center;

    img {
      width: 7rem;
      height: 7rem;
      border-radius: 50%;
      background-color: blue;
    }

    div {
      margin-left: 24px;

      strong {
        font-size: 1.8rem;
        color: #3d3d4d;
      }

      p {
        font-size: 1.2rem;
        color: #737380;
        margin-top: 4px;
      }
    }
  }

  ul {
    display: flex;
    list-style: none;
    margin-top: 40px;

    li {
      & + li {
        margin-left: 2rem;
      }

      strong {
        display: block;
        font-size: 1.5rem;
        color: #3d3d4d;
      }

      span {
        display: block;
        margin-top: 4px;
        color: #6c6c80;
      }
    }
  }
`;

export const Repositories = styled.div`
  margin-top: 80px;
`;
