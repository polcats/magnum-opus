import { Metadata } from 'next';

import { VisualgoProvider } from '@/provider/visualgo';

export const metadata: Metadata = {
  title: 'VisuAlgo',
  description: 'Visualize sorting algorithms',
  keywords: [
    'VisuAlgo',
    'Sorting Algorithms',
    'Visualize Algorithms',
    'Visualize Sorting Algorithms',
    'Algorithms',
    'Sorting',
    'Bubble Sort',
    'Comb Sort',
    'Heap Sort',
    'Insertion Sort',
    'Selection Sort',
    'Shell Sort',
  ],
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <VisualgoProvider>{children}</VisualgoProvider>;
}
