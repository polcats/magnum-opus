import { Box, Typography, useTheme } from '@mui/material';
import WebIcon from '@mui/icons-material/Web';

import { Section } from './section';
import { CardGrid } from './cards/grid';
import { ProjectCard } from './cards/item';

const projects: ProjectCard[] = [
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
    title: 'Profile Website',
    description:
      'This updated website that showcases my skills, projects, and experiences. It is built with React, NextJS, TypeScript, and Material-UI.',
    icon: <WebIcon sx={{ fontSize: 50 }} />,
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
      <Box sx={{ width: { lg: 1000, md: '100%' }, alignSelf: 'center' }}>
        <Typography variant="h3" sx={{ fontWeight: '600' }}>
          Recent Projects (2024)
        </Typography>
        <Typography
          variant="body1"
          sx={{ mt: 1, color: theme.palette.grey[100], fontStyle: 'italic' }}
        >
          These are personal projects that I made for my own use. I decided make a playground of
          them integrated in my portfolio.
        </Typography>

        <CardGrid sx={{ mt: 1 }} projects={projects} />
      </Box>
    </Section>
  );
};
