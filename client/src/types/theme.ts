import type { CSSProperties } from 'react';
import type { TypographyVariant } from './typography';

export interface Theme {
  borderRadius: string;
  colors: ThemeColors;
  typography: TypographyOptions;
}

interface ThemeColors {
  backgroundPrimary: string;
  backgroundSecondary: string;
  textPrimary: string;
  textSecodnary: string;
  buttonPrimary: string;
  buttonSecondary: string;
  accent: string;
  input: string;
  grey: {
    light: string;
    medium: string;
    dark: string;
  };
}

type TypographyOptions = Omit<Record<TypographyVariant, CSSProperties>, 'span'>;
