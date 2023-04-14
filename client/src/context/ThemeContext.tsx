import React from 'react';
import { ThemeProvider as EmotionThemeProvider, Global } from '@emotion/react';
import { defaultTheme } from 'theme';
import globalStyles from 'theme/global';

type ThemeContextProviderProps = React.PropsWithChildren;

export const ThemeProvider: React.FC<ThemeContextProviderProps> = ({ children = null }) => (
  <EmotionThemeProvider theme={defaultTheme}>
    <Global styles={globalStyles(defaultTheme)} />
    {children}
  </EmotionThemeProvider>
);
