import { Box, Divider, Link, Tooltip, Typography, useMediaQuery, useTheme } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';

import { useThemeSwitcher } from '@/hooks/useThemeSwitcher';
import { TechStack } from '@/constants/landing';

import { Section } from './section';
import { ResponsiveTypography } from '../theme/typography';

export const ProfileSection = () => {
  const theme = useTheme();
  const { mode } = useThemeSwitcher();
  const lessThanSmall = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <Section id="Profile">
      <Box sx={{ width: { xs: '100%', md: 900 }, alignSelf: 'center' }}>
        <ResponsiveTypography variant="h2" sx={{ fontWeight: '600' }}>
          Paul Jimuel Catalan
        </ResponsiveTypography>
        <ResponsiveTypography
          variant="h4"
          sx={{ color: mode === 'dark' ? theme.palette.grey[500] : theme.palette.grey[800] }}
        >
          Full Stack Software Engineer
        </ResponsiveTypography>

        <ResponsiveTypography
          variant="body1"
          sx={{ mt: 1, color: mode === 'dark' ? theme.palette.grey[500] : theme.palette.grey[800] }}
        >
          Skilled Software Engineer with extensive experience in mobile, web, and API development.
        </ResponsiveTypography>

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            alignItems: 'center',
            gap: 2,
            mt: 2,
          }}
        >
          <Tooltip title="GitHub" placement="bottom">
            <Link
              href="https://github.com/polcats"
              sx={{ display: 'block', width: 25, height: 28 }}
            >
              <GitHubIcon
                sx={{ fontSize: 30, color: mode === 'dark' ? undefined : '#000' }}
                color="action"
                titleAccess="GitHub"
              />
            </Link>
          </Tooltip>
          <Tooltip title="LinkedIn" placement="bottom">
            <Link
              href="https://linkedin.com/in/polcats"
              sx={{ display: 'block', width: 30, height: 28 }}
            >
              <LinkedInIcon
                sx={{ fontSize: 34, color: mode === 'dark' ? undefined : '#0a66c2' }}
                color="action"
                titleAccess="LinkedIn"
              />
            </Link>
          </Tooltip>
          <Tooltip title="Email me" placement="bottom">
            <Link
              href="mailto:hello@paulcatalan.dev"
              sx={{
                ml: {
                  xs: '-3px',
                  sm: 0,
                },
                width: {
                  xs: 30,
                  sm: 'auto',
                },
                height: {
                  xs: 28,
                  sm: 24,
                },
              }}
            >
              {lessThanSmall ? (
                <AlternateEmailIcon
                  sx={{
                    fontSize: 34,
                    color: mode === 'dark' ? '#FFFFFF' : theme.palette.grey[800],
                  }}
                  titleAccess="Email"
                />
              ) : (
                <Typography
                  variant="h6"
                  sx={{
                    color: theme.palette.mode === 'dark' ? '#FFFFFF' : theme.palette.grey[800],
                  }}
                >
                  hello@paulcatalan.dev
                </Typography>
              )}
            </Link>
          </Tooltip>
        </Box>

        <Divider sx={{ my: 6 }} />

        <Box>
          <ResponsiveTypography variant="h4" sx={{ mb: 1 }}>
            Tools and Technologies
          </ResponsiveTypography>
          {TechStack.map((skillset) => (
            <Typography variant="body1" key={skillset.title} sx={{ fontWeight: '700', my: 0.5 }}>
              {skillset.title}:{' '}
              <Typography component="span">{skillset.items.join(', ')}</Typography>
            </Typography>
          ))}
        </Box>
      </Box>
    </Section>
  );
};
