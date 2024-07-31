'use client';

import React from 'react';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import { CssBaseline } from '@mui/material';

import { MuiThemeProvider } from '@/provider/mui-theme-wrapper';
import { ThemeProvider } from '@/provider/theme';
import { APIProvider } from '@/provider/api';
import { getThemeMode } from '@/utils/cookies';

type RootProviderProps = React.PropsWithChildren<{}>;

export const RootProvider: React.FC<RootProviderProps> = ({ children }) => {
  const storeThemeMode = getThemeMode();

  return (
    <AppRouterCacheProvider>
      <ThemeProvider defaultMode={storeThemeMode}>
        <MuiThemeProvider>
          <APIProvider>
            <html lang="en">
              <CssBaseline />
              <body>{children}</body>
            </html>
          </APIProvider>
        </MuiThemeProvider>
      </ThemeProvider>
    </AppRouterCacheProvider>
  );
};
