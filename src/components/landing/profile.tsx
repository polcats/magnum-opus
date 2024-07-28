import { Box, Divider, Link, Typography, useTheme } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import { Section } from './section';

type SkillSet = {
  title: string;
  items: string[];
};

const TechStack: SkillSet[] = [
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

export const ProfileSection = () => {
  const theme = useTheme();
  return (
    <Section id="Profile">
      <Box sx={{ width: { s: '100%', md: 900 }, alignSelf: 'center' }}>
        <Typography variant="h2" sx={{ fontWeight: '600' }}>
          Paul Jimuel Catalan
        </Typography>
        <Typography variant="h4" sx={{ color: theme.palette.grey[500] }}>
          Full Stack Software Engineer
        </Typography>

        <Typography variant="body1" sx={{ mt: 1, color: theme.palette.grey[500] }}>
          Skilled Software Engineer with extensive experience in mobile, web, and API development.
        </Typography>

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            gap: 2,
            mt: 2,
          }}
        >
          <Link href="https://github.com/polcats" sx={{ display: 'block', width: 25, height: 28 }}>
            <GitHubIcon sx={{ fontSize: 30 }} color="action" />
          </Link>
          <Link
            href="https://linkedin.com/in/polcats"
            sx={{ display: 'block', width: 30, height: 28 }}
          >
            <LinkedInIcon sx={{ fontSize: 34 }} color="action" />
          </Link>
          <Link href="mailto:hello@paulcatalan.dev" sx={{ height: 24 }}>
            <Typography
              variant="h6"
              sx={{ color: theme.palette.mode === 'dark' ? '#FFFFFF' : '#000000' }}
            >
              hello@paulcatalan.dev
            </Typography>
          </Link>
        </Box>

        <Divider sx={{ my: 6 }} />

        <Box>
          <Typography variant="h4" sx={{ mb: 1 }}>
            Tech Stack
          </Typography>
          {TechStack.map((skillset) => (
            <Typography key={skillset.title} sx={{ fontWeight: '700' }}>
              {skillset.title}:{' '}
              <Typography component="span">{skillset.items.join(', ')}</Typography>
            </Typography>
          ))}
        </Box>
      </Box>
    </Section>
  );
};
