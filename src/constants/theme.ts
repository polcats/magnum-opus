'use client';

import { Montserrat, Roboto } from 'next/font/google';
import { ThemeOptions } from '@mui/material/styles';

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const monserrat = Montserrat({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export const commonThemeOptions: ThemeOptions = {
  typography: {
    fontFamily: monserrat.style.fontFamily,
  },
};
