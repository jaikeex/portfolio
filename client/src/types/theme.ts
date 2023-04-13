export interface Theme {
  name: string;
  colors: ThemeColors;
}

interface ThemeColors {
  backgroundPrimary: string;
  backgroundSecondary: string;
  textPrimary: string;
  textSecodnary: string;
  buttonPrimary: string;
  buttonSecondary: string;
}
