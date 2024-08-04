import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Flight Tracker',
  description: 'Track flights in real-time',
  keywords: [
    'Flight Tracker',
    'OpenSky Network',
    'Aircraft Tracking',
    'Aircraft',
    'Airplane',
    'Air Traffic',
    'Air Traffic Control',
    'Air Traffic Management',
    'Air Traffic Monitoring',
    'Air Traffic Surveillance',
    'Air Traffic Tracking',
    'Air Traffic Visualization',
    'Flight',
    'Flight Tracking',
    'Flight Visualization',
    'OpenSky',
    'OpenSky API',
    'OpenSky Network API',
    'Real-time Flight Tracking',
    'Real-time Flight Visualization',
    'Real-time Tracking',
    'Real-time Visualization',
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
