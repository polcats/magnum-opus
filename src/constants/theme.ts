'use client';

import { Roboto } from 'next/font/google';
import { ThemeOptions } from '@mui/material/styles';

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export const commonThemeOptions: ThemeOptions = {
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
};
