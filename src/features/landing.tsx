'use client';

import { Box, Divider, Link, Typography, useTheme } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import { Navigation } from '@/components/common/navigation';

export default function Landing() {
  const theme = useTheme();
  return (
    <>
      <Navigation type="home" />
      <Box
        id="Home"
        sx={{
          display: 'flex',
          minHeight: 800,
          py: 6,
          px: { xs: 3, sm: 6 },
          backgroundColor: theme.palette.grey[900],
          justifyContent: 'center',
        }}
      >
        <Box sx={{ width: { lg: 1000, md: '100%' }, alignSelf: 'center' }}>
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
            <Link
              href="https://github.com/polcats"
              sx={{ display: 'block', width: 25, height: 28 }}
            >
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
            <Typography sx={{ display: 'flex', flexDirection: 'row', gap: 1 }}>
              <Typography sx={{ fontWeight: '700' }}>Languages:</Typography>
              JavaScript, TypeScript, Python, C/C++
            </Typography>
            <Typography sx={{ display: 'flex', flexDirection: 'row', gap: 1 }}>
              <Typography sx={{ fontWeight: '700' }}>Web:</Typography>
              React.js, Vue.js, Next.js, HTML, CSS, jQuery, Tailwind CSS, MaterialUI, Styled
              Components, Redux, MobX
            </Typography>
            <Typography sx={{ display: 'flex', flexDirection: 'row', gap: 1 }}>
              <Typography sx={{ fontWeight: '700' }}>Mobile:</Typography>
              React Native, Expo, NativeWind, MaterialUI, UI Kitten, Styled Components, Redux,
              MobX-Keystone, Dart, Flutter
            </Typography>
            <Typography sx={{ display: 'flex', flexDirection: 'row', gap: 1 }}>
              <Typography sx={{ fontWeight: '700' }}>Backend:</Typography> Django, Node.js,
              Express.js, GraphQL, RESTful APIs
            </Typography>
            <Typography sx={{ display: 'flex', flexDirection: 'row', gap: 1 }}>
              <Typography sx={{ fontWeight: '700' }}>Databases:</Typography> PostgreSQL, MariaDB,
              MySQL, MongoDB
            </Typography>
            <Typography sx={{ display: 'flex', flexDirection: 'row', gap: 1 }}>
              <Typography sx={{ fontWeight: '700' }}>DevOps:</Typography> Git, Github, GitLab,
              Docker, Kubernetes, Terraform
            </Typography>
            <Typography sx={{ display: 'flex', flexDirection: 'row', gap: 1 }}>
              <Typography sx={{ fontWeight: '700' }}>CMS:</Typography> Contentful, WordPress
            </Typography>
            <Typography sx={{ display: 'flex', flexDirection: 'row', gap: 1 }}>
              <Typography sx={{ fontWeight: '700' }}>Data Engineering:</Typography> Pandas,
              GeoPandas, AutoGIS, PowerBI
            </Typography>
            <Typography sx={{ display: 'flex', flexDirection: 'row', gap: 1 }}>
              <Typography sx={{ fontWeight: '700' }}>Others:</Typography> AWS (ECR, ECS, SNS, S3),
              Firebase (Analytics, Firestore, Functions, Messaging/Notifications), Auth0, Algolia,
              Sentry, OneSignal
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box
        id="Projects"
        sx={{
          userSelect: 'none',
          display: 'flex',
          minHeight: 600,
          py: 6,
          px: { xs: 3, sm: 6 },
          backgroundColor: theme.palette.grey[500],
          justifyContent: 'center',
        }}
      >
        <Box sx={{ width: { lg: 1000, md: '100%' }, alignSelf: 'center' }}>
          <Typography variant="h3" sx={{ fontWeight: '600' }}>
            Recent Personal Projects
          </Typography>
          <Typography
            variant="body1"
            sx={{ mt: 1, color: theme.palette.grey[100], fontStyle: 'italic' }}
          >
            These are projects that I made for my personal use, but I thought it would be cool to
            make a playground of them integrated in my portfolio.
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          userSelect: 'none',
          display: 'flex',
          minHeight: 600,
          py: 6,
          px: { xs: 3, sm: 6 },
          backgroundColor: theme.palette.grey[900],
          justifyContent: 'center',
        }}
      >
        <Box sx={{ width: { lg: 1000, md: '100%' }, alignSelf: 'center' }}>
          <Typography variant="h3" sx={{ fontWeight: '600' }}>
            Recent Projects
          </Typography>
          <Typography
            variant="body1"
            sx={{ mt: 1, color: theme.palette.grey[100], fontStyle: 'italic' }}
          >
            These are projects that I made for my personal use, but I thought it would be cool to
            make a playground of them integrated with my portfolio.
          </Typography>
        </Box>
      </Box>
    </>
  );
}
