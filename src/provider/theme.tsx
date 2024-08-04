import { createTheme, Theme } from '@mui/material';
import React, { useCallback, useMemo, useState } from 'react';
import { useMount } from 'react-use';

import { commonThemeOptions } from '@/constants/theme';
import { ThemeMode } from '@/types/theme';
import { getThemeMode, storeThemeMode } from '@/utils/cookies';

type ThemeContext = {
  loading: boolean;
  theme: Theme;
  mode: ThemeMode;
  toggleMode: () => void;
};

export const ThemeContext = React.createContext<ThemeContext>({
  loading: true,
  theme: createTheme(),
  mode: 'dark',
  toggleMode: () => {},
});

type ThemeProps = React.PropsWithChildren<{
  defaultMode: ThemeMode | undefined;
}>;

export const ThemeProvider: React.FC<ThemeProps> = ({ defaultMode = 'dark', children }) => {
  const [mode, setMode] = useState<ThemeMode>(defaultMode);
  const [loading, setLoading] = useState(true);

  const toggleMode = useCallback(() => {
    setMode((current) => {
      const next = (current === 'dark' ? 'light' : 'dark') as ThemeMode;
      storeThemeMode(next);
      return next;
    });
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
      loading,
      mode,
      theme,
      toggleMode,
    }),
    [mode, loading, theme, toggleMode]
  );

  useMount(() => {
    const storedMode = getThemeMode();
    if (storedMode) {
      setMode(storedMode);
    }
    setLoading(false);
  });

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};
