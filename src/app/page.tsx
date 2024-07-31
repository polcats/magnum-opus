import { Metadata } from 'next';
import dynamic from 'next/dynamic';

const Landing = dynamic(() => import('@/features/landing'), {
  ssr: false,
});

export const metadata: Metadata = {
  title: 'Paul Jimuel Catalan',
  description: 'Full Stack Software Engineer',
};

export default function LandingPage() {
  return <Landing />;
}
