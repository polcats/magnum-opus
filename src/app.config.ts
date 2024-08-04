type AppConfig = {
  OPENSKY_BASE_URL: string;
  OPENSKY_API_URL_STATES_ALL: string;
  OPENSKY_API_URL_TRACKS: string;
  MAP_UPDATE_INTERVAL: number;
  OPENWEATHER_API_KEY: string;
  OPENWEATHER_BASE_URL: string;
  GEOCODING_API_URL: string;
  OPENWEATHER_API_URL: string;
  THEME_COOKIE_KEY: string;
  [key: string]: string | number;
};

const getEnvVariables = (): AppConfig => {
  if (
    !process.env.NEXT_PUBLIC_MAP_UPDATE_INTERVAL ||
    isNaN(parseInt(process.env.NEXT_PUBLIC_MAP_UPDATE_INTERVAL, 10))
  ) {
    throw new Error('NEXT_PUBLIC_MAP_UPDATE_INTERVAL is not defined');
  }

  return {
    OPENSKY_BASE_URL: process.env.NEXT_PUBLIC_OPENSKY_BASE_URL || '',
    OPENSKY_API_URL_STATES_ALL: process.env.NEXT_PUBLIC_OPENSKY_API_URL_STATES_ALL || '',
    OPENSKY_API_URL_TRACKS: process.env.NEXT_PUBLIC_OPENSKY_API_URL_TRACKS || '',
    MAP_UPDATE_INTERVAL: parseInt(process.env.NEXT_PUBLIC_MAP_UPDATE_INTERVAL, 10),

    OPENWEATHER_API_KEY: process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY || '',
    OPENWEATHER_BASE_URL: process.env.NEXT_PUBLIC_OPENWEATHER_BASE_URL || '',
    GEOCODING_API_URL: process.env.NEXT_PUBLIC_GEOCODING_API_URL || '',
    OPENWEATHER_API_URL: process.env.NEXT_PUBLIC_OPENWEATHER_API_URL || '',

    THEME_COOKIE_KEY: process.env.NEXT_PUBLIC_THEME_COOKIE_KEY || '',
  };
};

export const appConfig: AppConfig = getEnvVariables();

if (process.env.NODE_ENV === 'development') {
  console.log('ENV', appConfig);
}
