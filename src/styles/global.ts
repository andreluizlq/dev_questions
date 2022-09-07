import {createGlobalStyle} from 'styled-components';

export default createGlobalStyle`
  
  :root {
    --white: #FFF;
    
    --blue-50: #D2DCE9;
    --blue-100: #BFCAD9;
    --blue-200: #6692CC;
    --blue-500: #366CB2;
    --blue-800: #235391;
    --blue-1000: #143866;
    --blue-1300: #08264D;

        
    --orange-200: #FFBA59;
    --orange-500: #FFA04D; 
    --orange-800: #FF8232;
    --orange-1000: #E56F22;
    --orange-1300: #CC570A;
  }

  *{
    margin: 0;
    padding: 0;
    box-sizing:border-box;
  }

  body {
    background: var(--blue-800);
    line-height: 1;
    color: inherit;
    text-decoration: none;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html{
    scroll-behavior: smooth;
  }

  body, input, textarea, button {
      font: 500 1rem Inter, Roboto;
      color: var(--gray-500);
  }

  h1, h2, h3, h4, h5, h6 {
      font-weight:600;
      font-family: Lexend, Roboto;
      color: var(--gray-800);
  }

  h1{
      font-size: 1.5rem;
  }

  button{
      cursor: pointer;
  }

  @media (max-width: 1080px) {
      html{
          font-size: 93.75%; //15px de 16px(do padrão)
      }
  }

  @media (max-width: 720px) {
      html{
          font-size: 87.5%; //14px de 16px(do padrão)
      }
  }
`;
