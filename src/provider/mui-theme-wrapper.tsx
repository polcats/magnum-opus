'use client';

import { ThemeProvider } from '@mui/material/styles';

import { useThemeSwitcher } from '@/hooks/useThemeSwitcher';

export const MuiThemeProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const { theme } = useThemeSwitcher();
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
