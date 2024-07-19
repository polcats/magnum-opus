'use client';

import { ThemeProvider } from '@mui/material/styles';

import { useTheme } from '@/hooks/useTheme';

export const MuiThemeProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const { theme } = useTheme();
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
