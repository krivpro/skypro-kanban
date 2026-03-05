import { createContext, useContext, useEffect, useState } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from '../theme';

const ThemeContext = createContext(null);

export const useThemeMode = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error('useThemeMode должен использоваться внутри ThemeProvider');
  }

  return context;
};

export const ThemeProvider = ({ children }) => {
  const [themeName, setThemeName] = useState(() => {
    if (typeof window === 'undefined') return 'light';

    try {
      const saved = window.localStorage.getItem('theme');
      return saved === 'dark' || saved === 'light' ? saved : 'light';
    } catch {
      return 'light';
    }
  });

  useEffect(() => {
    try {
      window.localStorage.setItem('theme', themeName);
    } catch {
      // ignore
    }

    if (typeof document !== 'undefined') {
      document.documentElement.setAttribute('data-theme', themeName);
    }
  }, [themeName]);

  const toggleTheme = () => {
    setThemeName((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  const theme = themeName === 'dark' ? darkTheme : lightTheme;

  const value = {
    themeName,
    toggleTheme,
    theme,
  };

  return (
    <ThemeContext.Provider value={value}>
      <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeContext;

