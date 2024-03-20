import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
:root {
    --body-bg: ${({ theme }) => theme.body};
    --text-color: ${({ theme }) => theme.text};
    --text-color-faint: ${({ theme }) => theme.faintText};
    --card-body: ${({ theme }) => theme.cardBody};
    --accent-blue: ${({ theme }) => theme.accentBlue};
    --accent-yellow: ${({ theme }) => theme.accentYellow};
    --button-color: ${({ theme }) => theme.button};
    --hover-color: ${({ theme }) => theme.hover};
    --page-padding-sides: 5%;
    --page-padding-block: 2rem;
  }
  body {
    font-family: "Nunito Sans", sans-serif;
    background-color: var(--body-bg);
    color: var(--text-color);
    margin: 0;
  }
`;

export default GlobalStyle;
