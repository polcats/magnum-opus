import dynamic from 'next/dynamic';

const FlightTracker = dynamic(() => import('@/features/flight-tracker'), {
  ssr: false,
});

export default function FlightTrackerPage() {
  return <FlightTracker />;
}
