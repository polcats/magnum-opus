import { useContext } from 'react';

import { APIContext } from '@/provider/api';

export const useApi = () => {
  return useContext(APIContext);
};
