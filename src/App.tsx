import { ThemeProvider } from 'styled-components';
import MainScreen from '@/pages/main/main.tsx';
import PersonalTermsScreen from '@/pages/terms/personal-terms.tsx';
import TermsScreen from '@/pages/terms/terms.tsx';
import GlobalStyle from '@/styles/GlobalStyle.ts';
import { lightTheme } from '@/styles/theme.ts';

function App() {
  const path = window.location.pathname;

  const renderPage = () => {
    if (path === '/terms/personal') return <PersonalTermsScreen />;
    if (path === '/terms') return <TermsScreen />;
    return <MainScreen />;
  };

  return (
      <ThemeProvider theme={lightTheme}>
        <GlobalStyle />
        {renderPage()}
      </ThemeProvider>
  )
}

export default App
