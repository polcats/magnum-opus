'use client';

import { Montserrat, Roboto, Ubuntu, Lato } from 'next/font/google';
import { ThemeOptions } from '@mui/material/styles';

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const monserrat = Montserrat({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const ubuntu = Ubuntu({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const lato = Lato({
  weight: ['100', '300', '400', '700', '900'],
  subsets: ['latin'],
  display: 'swap',
});

export const commonThemeOptions: ThemeOptions = {
  typography: {
    fontFamily: ubuntu.style.fontFamily,
  },
};
