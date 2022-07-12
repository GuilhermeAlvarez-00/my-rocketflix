import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  }

  :root {
    --title: #fffcf9;
    --subtitle: #b3b3b3;
    --bg-button: #e9e6e3;
    --background: linear-gradient(43deg, #102d71 0%, #000000 52%, #c12a23 100%);
  }

  html {
    font-size: 62.5%;
  }

  body {
    width: 100%;
    min-height: 100vh;
    background: var(--background);
    color: var(--title);
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    cursor: pointer;
  }
`;
