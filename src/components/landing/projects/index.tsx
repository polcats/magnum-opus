import { Box, Typography, useTheme } from '@mui/material';
import WebIcon from '@mui/icons-material/Web';

import { Section } from '../section';
import { ProjectGrid } from './grid';
import { ProjectCard } from './card';
import { ResponsiveTypography } from '@/components/theme/typography';

const projects: ProjectCard[] = [
  {
    title: 'Profile Website',
    description:
      'This updated website that showcases my skills, projects, and experiences. It is built with React, NextJS, TypeScript, and Material-UI.',
    icon: <WebIcon sx={{ fontSize: 50 }} />,
  },
  {
    title: 'Flight Tracker',
    description:
      'An app that tracks flights in real-time using the OpenSky Network API. It displays flight information, such as the flight number, origin, destination, and altitude.',
    notes: "Limitations: The OpenSky Network API doesn't provide real-time data for all flights.",
    image: '/projects/flight-tracker.png',
    href: '/flight-tracker',
    beta: true,
  },
  {
    title: 'TBA',
    description: 'Ongoing project...',
  },
];

export const ProjectsSection = () => {
  const theme = useTheme();
  return (
    <Section id="Projects" alt>
      <Box
        sx={{
          width: { xs: '100%', md: 900 },
          alignSelf: 'center',
        }}
      >
        <ResponsiveTypography variant="h4" sx={{ fontWeight: '600' }}>
          Recent Projects (2024)
        </ResponsiveTypography>
        <ResponsiveTypography
          variant="body1"
          sx={{ mt: 1, color: theme.palette.grey[100], fontStyle: 'italic' }}
        >
          These are personal projects that I made for my own use. I decided make a playground of
          them integrated in my portfolio.
        </ResponsiveTypography>

        <ProjectGrid sx={{ mt: 1 }} projects={projects} />
      </Box>
    </Section>
  );
};
