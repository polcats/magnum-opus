import { RootProvider } from '@/provider/root';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <RootProvider>{children}</RootProvider>;
}
