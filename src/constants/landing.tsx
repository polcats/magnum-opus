import { NavItem, SkillSet } from '@/types/landing';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import EngineeringIcon from '@mui/icons-material/Engineering';
import StarIcon from '@mui/icons-material/Star';

/** Might move these to contentful later on */

export const NAV_ITEMS: NavItem[] = [
  {
    name: 'Profile',
    id: 'Profile',
    icon: <AccountCircleIcon />,
  },
  {
    name: 'Experience',
    id: 'Experience',
    icon: <EngineeringIcon />,
  },
  {
    name: 'Projects',
    id: 'Projects',
    icon: <StarIcon />,
  },
];

export const TechStack: SkillSet[] = [
  {
    title: 'Languages',
    items: ['JavaScript', 'TypeScript', 'Python', 'C/C++'],
  },
  {
    title: 'Web',
    items: [
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
    ],
  },
  {
    title: 'Mobile',
    items: [
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
    ],
  },
  {
    title: 'Backend',
    items: ['Django', 'Node.js', 'Express.js', 'GraphQL', 'RESTful APIs'],
  },
  {
    title: 'Databases',
    items: ['PostgreSQL', 'MariaDB', 'MySQL', 'MongoDB'],
  },
  {
    title: 'DevOps',
    items: ['Git', 'GitHub', 'GitLab', 'Docker', 'Kubernetes', 'Terraform'],
  },
  {
    title: 'CMS',
    items: ['Contentful', 'WordPress'],
  },
  {
    title: 'Data Engineering',
    items: ['Pandas', 'GeoPandas', 'AutoGIS', 'Power BI'],
  },
  {
    title: 'Others',
    items: [
      'AWS (ECR, ECS, SNS, S3)',
      'Firebase (Analytics, Firestore, Functions, Messaging/Notifications)',
      'Auth0',
      'Algolia',
      'Sentry',
      'OneSignal',
    ],
  },
];
