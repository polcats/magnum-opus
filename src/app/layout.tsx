import type { Metadata } from 'next';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';

import { CssBaseline } from '@mui/material';
import { MuiThemeProvider } from '@/provider/mui-theme-wrapper';
import { ThemeProvider } from '@/provider/theme';

export const metadata: Metadata = {
  title: 'Paul Jimuel Catalan',
  description: 'Full Stack Software Engineer',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AppRouterCacheProvider>
      <ThemeProvider>
        <MuiThemeProvider>
          <html lang="en">
            <CssBaseline />
            <body>{children}</body>
          </html>
        </MuiThemeProvider>
      </ThemeProvider>
    </AppRouterCacheProvider>
  );
}
