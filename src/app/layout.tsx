import type { Metadata } from 'next';

import { RootProvider } from '@/provider/root';

export const metadata: Metadata = {
  title: 'Paul Jimuel Catalan',
  description: 'Full Stack Software Engineer',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <RootProvider>{children}</RootProvider>;
}
