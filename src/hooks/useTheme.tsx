'use client';

import { ThemeContext } from '@/provider/theme';
import { useContext } from 'react';

export function useTheme() {
  return useContext(ThemeContext);
}
