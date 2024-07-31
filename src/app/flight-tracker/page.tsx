import { Metadata } from 'next';
import dynamic from 'next/dynamic';

const FlightTracker = dynamic(() => import('@/features/flight-tracker'), {
  ssr: false,
});

export const metadata: Metadata = {
  title: 'Paul Jimuel Catalan | Flight Tracker',
  description: 'Full Stack Software Engineer',
};

export default function FlightTrackerPage() {
  return <FlightTracker />;
}
