import { createTheme, Theme } from '@mui/material';
import React, { useCallback, useMemo, useState } from 'react';

import { commonThemeOptions } from '@/constants/theme';

type Mode = 'light' | 'dark';

type ThemeContext = {
  theme: Theme;
  mode: Mode;
  toggleMode: () => void;
};

export const ThemeContext = React.createContext<ThemeContext>({
  theme: createTheme(),
  mode: 'dark',
  toggleMode: () => {},
});

type ThemeProps = React.PropsWithChildren<{}>;

export const ThemeProvider: React.FC<ThemeProps> = ({ children }) => {
  const [mode, setMode] = useState<Mode>('dark');

  const toggleMode = useCallback(() => {
    setMode((current) => (current === 'dark' ? 'light' : 'dark'));
  }, []);

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
        ...commonThemeOptions,
      }),
    [mode]
  );

  const value = useMemo(
    () => ({
      mode,
      theme,
      toggleMode,
    }),
    [mode, theme, toggleMode]
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};
