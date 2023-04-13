import React from 'react';
import { ThemeProvider as EmotionThemeProvider, Global } from '@emotion/react';
import { defaultTheme } from 'theme';
import globalStyles from 'theme/global';

interface ThemeContextProviderProps extends React.PropsWithChildren {}

export const ThemeProvider: React.FC<ThemeContextProviderProps> = ({ children = null }) => {
  return (
    <EmotionThemeProvider theme={defaultTheme}>
      <Global styles={globalStyles(defaultTheme)} />
      {children}
    </EmotionThemeProvider>
  );
};
