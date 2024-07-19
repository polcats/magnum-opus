'use client';

import { useContext } from 'react';

import { ThemeContext } from '@/provider/theme';

export function useTheme() {
  return useContext(ThemeContext);
}
