import React, { useMemo } from 'react';

import { API } from '@/api';

type APIContext = API;

export const APIContext = React.createContext<APIContext>(new API());

export type APIProviderProps = React.PropsWithChildren<{}>;

export const APIProvider: React.FC<APIProviderProps> = ({ children }) => {
  const api = useMemo(() => new API(), []);
  return <APIContext.Provider value={api}>{children}</APIContext.Provider>;
};
