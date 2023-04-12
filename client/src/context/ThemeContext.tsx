import { createContext, useContext, useState } from 'react';

interface ThemeContextValue {
  theme: 'light' | 'dark';
  setTheme: (theme: 'light' | 'dark') => void;
}

interface ThemeContextProviderProps extends React.PropsWithChildren {
  defaultTheme: 'light' | 'dark';
}

const ThemeContext = createContext<ThemeContextValue>({} as ThemeContextValue);

export const useThemeContext = () => useContext(ThemeContext);

export const ThemeContextProvider: React.FC<ThemeContextProviderProps> = ({
  children = null,
  defaultTheme = 'light'
}) => {
  const [theme, setTheme] = useState<'dark' | 'light'>(defaultTheme);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={`theme-${theme}`}>{children}</div>
    </ThemeContext.Provider>
  );
};
