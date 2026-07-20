import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html,
  body,
  #root {
    min-width: 20rem;
    min-height: 100%;
    margin: 0;
  }

  body {
    background: ${({ theme }) => theme.mainColor};
    font-family: Pretendard, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  }

  button,
  input {
    font-family: inherit;
  }
`;

export default GlobalStyle;
