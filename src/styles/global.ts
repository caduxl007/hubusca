import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
    text-decoration: none;
  }

  body {
    background-color: #fff;
    -webkit-font-smoothing: antialiased;
  }

  html, body {
    scroll-behavior: smooth;
  }

  body, input, button {
    font-family: 'Roboto Slab', serif;
    font-size: 1rem;
    border: 0;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }

  button {
    cursor: pointer;
  }

  @media(max-width: 1080px) {
  html {
    font-size: 93.75%;
  }
}

@media(max-width: 720px) {
  html {
    font-size: 87.5%;
  }
}
`;
