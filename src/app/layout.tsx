import { Metadata } from 'next';

import { RootProvider } from '@/provider/root';
import '@/styles/app.css';

export const metadata: Metadata = {
  title: 'Paul Jimuel Catalan',
  description: 'Full Stack Software Engineer',
  keywords: [
    'Paul Jimuel Catalan',
    'Paul Catalan',
    'Full Stack Software Engineer',
    'Software Engineer',
    'Software Developer',
    'Mobile Developer',
    'Web Developer',
    'API Developer',
    'React.js',
    'Vue.js',
    'Next.js',
    'HTML',
    'CSS',
    'jQuery',
    'Tailwind CSS',
    'Material-UI',
    'Styled Components',
    'Redux',
    'MobX',
    'React Native',
    'Expo',
    'NativeWind',
    'MaterialUI',
    'UI Kitten',
    'Styled Components',
    'Redux',
    'MobX-Keystone',
    'Dart',
    'Flutter',
    'Django',
    'Node.js',
    'Express.js',
    'GraphQL',
    'RESTful APIs',
    'PostgreSQL',
    'MariaDB',
    'MySQL',
    'MongoDB',
    'Git',
    'GitHub',
    'GitLab',
    'Docker',
    'Kubernetes',
    'Terraform',
    'Contentful',
    'WordPress',
    'Pandas',
    'GeoPandas',
    'AutoGIS',
    'Power BI',
    'AWS (ECR, ECS, SNS, S3)',
    'Firebase (Analytics, Firestore, Functions, Messaging/Notifications)',
    'Auth0',
    'Algolia',
    'Sentry',
    'OneSignal',
  ],
  icons: { icon: 'https://www.paulcatalan.dev//favicon.ico' },
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <RootProvider>{children}</RootProvider>;
}
