'use client';

import dynamic from 'next/dynamic';

const Visualgo = dynamic(() => import('@/features/visualgo'), {
  ssr: false,
});

export default Visualgo;
