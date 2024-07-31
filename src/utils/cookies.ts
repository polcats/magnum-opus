import { appConfig } from '@/app.config';
import { ThemeMode } from '@/types/theme';
import { getCookie, setCookie } from 'cookies-next';

export const storeThemeMode = (mode: ThemeMode) => {
  setCookie(appConfig.THEME_COOKIE_KEY, mode, {
    expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 365),
  });
};

export const getThemeMode = (): ThemeMode | undefined => {
  return getCookie(appConfig.THEME_COOKIE_KEY) as ThemeMode | undefined;
};
