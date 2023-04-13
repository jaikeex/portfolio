export interface Theme {
  colors: ThemeColors;
}

interface ThemeColors {
  backgroundPrimary: string;
  backgroundSecondary: string;
  textPrimary: string;
  textSecodnary: string;
  buttonPrimary: string;
  buttonSecondary: string;
  accent: string;
  neutral: string;
}
