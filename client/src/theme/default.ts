import type { Theme } from 'types/theme';

export const defaultTheme: Theme = {
  borderRadius: '4px',
  colors: {
    backgroundPrimary: '#0F1624',
    backgroundSecondary: '#2c304d',
    textPrimary: '#dddddd',
    textSecodnary: '#202020',
    buttonPrimary: '#005c9e',
    buttonSecondary: '#1565c0',
    accent: '#722FD0',
    input: '#ADB0C3',
    grey: {
      light: '#D8D8D8',
      medium: '#A9A9A9',
      dark: '#696969'
    }
  },
  typography: {
    h1: {
      fontSize: '2rem',
      fontWeight: 400,
      marginBottom: '3rem'
    },
    h2: {
      fontSize: '1.75rem',
      fontWeight: '500',
      marginBottom: '2rem'
    },
    h3: {
      fontSize: '1.5rem',
      fontWeight: 600,
      marginBottom: '0.75rem'
    },
    h4: {
      fontSize: '1.25rem',
      fontWeight: 500,
      marginBottom: '0.5rem'
    },
    h5: {
      fontSize: '1.25rem',
      fontWeight: 400,
      marginBottom: '0.75rem'
    },
    h6: {
      fontSize: '1.15rem',
      fontWeight: 400,
      marginBottom: '0.5rem'
    },
    p: {
      fontSize: '0.913rem',
      lineHeight: '1.6'
    }
  }
};
