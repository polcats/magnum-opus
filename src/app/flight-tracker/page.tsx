'use client';

import dynamic from 'next/dynamic';

const FlightTracker = dynamic(() => import('@/features/flight-tracker'), {
  ssr: false,
});

export default FlightTracker;
