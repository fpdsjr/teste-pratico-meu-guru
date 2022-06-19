import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --white: #FFFFFF
  }
  
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
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
    background: rgb(42,0,79);
    background: linear-gradient(90deg, rgba(42,0,79,1) 0%, rgba(3,187,150,1) 100%);
    -webkit-font-smoothing: antialiased;
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
