import { Outlet } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '@/styles/GlobalStyle.ts';
import { lightTheme } from '@/styles/theme.ts';

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyle />
      <Outlet />
    </ThemeProvider>
  );
}

export default App;
