import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,opsz,wght@0,6..12,200..1000;1,6..12,200..1000&display=swap');
@import url('https://necolas.github.io/normalize.css/8.0.1/normalize.css');

:root {
    --primary-color: #1E272F;
    --accent-color: #8236C8;
    --hover-color: #5f2496;
    --important-color: #E23C3C;
    --page-padding-sides: 15%;
    --page-padding-block: 2rem;
  }
  body {
    font-family: "Nunito Sans", sans-serif;
    color:  var(--primary-color);
    margin: 0;
  }
  main {
    min-height: 73.05svh;
  }
`;

export default GlobalStyle;
