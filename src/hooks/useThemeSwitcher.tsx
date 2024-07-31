import { useContext } from 'react';

import { ThemeContext } from '@/provider/theme';

export function useThemeSwitcher() {
  return useContext(ThemeContext);
}
