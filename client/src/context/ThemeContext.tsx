import React, { useCallback, useMemo } from 'react';
import { createContext, useContext, useState } from 'react';
import { ThemeProvider as EmotionThemeProvider, Global } from '@emotion/react';
import { lightTheme, darkTheme } from 'themes';
import { Theme } from 'types/theme';
import globalStyles from 'themes/global';

interface ThemeContextValue {
  theme: Theme;
  setTheme: (theme: 'light' | 'dark') => void;
}

interface ThemeContextProviderProps extends React.PropsWithChildren {}

const ThemeContext = createContext<ThemeContextValue>({} as ThemeContextValue);

export const useThemeContext = () => useContext(ThemeContext);

export const ThemeContextProvider: React.FC<ThemeContextProviderProps> = ({ children = null }) => {
  const [theme, setTheme] = useState<Theme>(lightTheme);

  const availableThemes = {
    light: lightTheme,
    dark: darkTheme
  };

  const themeChangeHandler = useCallback((theme: 'light' | 'dark') => {
    theme in availableThemes && setTheme(availableThemes[theme]);
  }, []);

  const defaultValue = useMemo(() => ({ theme: theme, setTheme: themeChangeHandler }), [theme, themeChangeHandler]);

  return (
    <ThemeContext.Provider value={defaultValue}>
      <EmotionThemeProvider theme={theme}>
        <Global styles={globalStyles(theme)} />
        {children}
      </EmotionThemeProvider>{' '}
    </ThemeContext.Provider>
  );
};
