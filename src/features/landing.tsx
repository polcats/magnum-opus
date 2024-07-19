'use client';

import { Box, Button, Container, Link, Typography, useTheme } from '@mui/material';
import FileDownloadRoundedIcon from '@mui/icons-material/FileDownloadRounded';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import { useThemeSwitcher } from '@/hooks/useThemeSwitcher';

export default function Landing() {
  const theme = useTheme();
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          minHeight: 600,
          py: 6,
          px: 6,
          backgroundColor: theme.palette.grey[900],
          justifyContent: 'center',
        }}
      >
        <Box sx={{ width: 1000, alignSelf: 'center' }}>
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
        </Box>
      </Box>
      <Box
        sx={{
          userSelect: 'none',
          display: 'flex',
          minHeight: 600,
          py: 6,
          px: 6,
          backgroundColor: theme.palette.grey[500],
          justifyContent: 'center',
        }}
      >
        <Box sx={{ width: 1000, alignSelf: 'center' }}>
          <Typography variant="h2" sx={{ fontWeight: '600' }}>
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
      <Box
        sx={{
          userSelect: 'none',
          display: 'flex',
          minHeight: 600,
          py: 6,
          px: 6,
          backgroundColor: theme.palette.grey[900],
          justifyContent: 'center',
        }}
      >
        <Box sx={{ width: 1000, alignSelf: 'center' }}>
          <Typography variant="h2" sx={{ fontWeight: '600' }}>
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
