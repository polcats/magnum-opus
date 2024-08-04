'use client';

import dynamic from 'next/dynamic';

const Landing = dynamic(() => import('@/features/landing'), {
  ssr: false,
});

export default Landing;
