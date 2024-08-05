import { useContext } from 'react';

import { VisualgoContext } from '@/provider/visualgo';

export const useVisualgo = () => {
  return useContext(VisualgoContext);
};
