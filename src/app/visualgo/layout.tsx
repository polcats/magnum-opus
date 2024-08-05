import { Metadata } from 'next';

import { VisualgoProvider } from '@/provider/visualgo';

export const metadata: Metadata = {
  title: 'VisuAlgo',
  description: 'Visualize sorting algorithms',
  keywords: ['VisuAlgo', 'Sorting Algorithms', 'Algorithms', 'Sorting'],
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <VisualgoProvider>{children}</VisualgoProvider>;
}
