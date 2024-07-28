import React, { useMemo } from 'react';

import { API } from '@/api';

type APIContext = API;

export const APIContext = React.createContext<APIContext>(new API());

export type APIPRoviderProps = React.PropsWithChildren<{}>;

export const APIProvider: React.FC<APIPRoviderProps> = ({ children }) => {
  const api = useMemo(() => new API(), []);
  return <APIContext.Provider value={api}>{children}</APIContext.Provider>;
};
