'use client';

import { useTheme } from '@/hooks/useTheme';
import { ThemeProvider } from '@mui/material/styles';

export const MuiThemeProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const { theme } = useTheme();
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
