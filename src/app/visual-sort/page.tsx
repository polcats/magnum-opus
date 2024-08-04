import { Metadata } from 'next';
import dynamic from 'next/dynamic';

const VisualSort = dynamic(() => import('@/features/visual-sort'), {
  ssr: false,
});

export const metadata: Metadata = {
  title: 'Paul Jimuel Catalan | Visual Sort',
  description: 'Full Stack Software Engineer',
};

export default VisualSort;
