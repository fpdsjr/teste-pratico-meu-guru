import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --white-100: #FFFFFF
    --cyan-500: #03bb96
    --purple-600: #2a004f
  }
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-shadow: 1px 1px 5px  #00000062;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }
    
    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }

  body {
    background-image: linear-gradient(to right top, #2a004f, #28024b, #250546, #230642, #21083d, #20093c, #20093a, #1f0a39, #1f0a3a, #20093c, #20093d, #21083e);
    -webkit-font-smoothing: antialiased;
    height: 100vh;
  }

  body, input, textarea, button {
    font-family: 'IBM Plex Sans', sans-serif;
    font-weight: 400;
  }

  h1, h2, h3 , h4 , h5 , h6 , strong {
    font-weight: 600;
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;
