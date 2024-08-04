import { Box, Typography, useTheme } from '@mui/material';
import WebIcon from '@mui/icons-material/Web';

import { Section } from '../section';
import { ProjectGrid } from './grid';
import { ProjectCard } from './card';
import { ResponsiveTypography } from '@/components/theme/typography';
import { useThemeSwitcher } from '@/hooks/useThemeSwitcher';
import BarChartIcon from '@mui/icons-material/BarChart';
import FlightIcon from '@mui/icons-material/Flight';

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
    // image: '/projects/flight-tracker.png',
    icon: <FlightIcon sx={{ fontSize: 50 }} />,
    href: '/flight-tracker',
    beta: true,
  },
  {
    title: 'Visual Sort D3',
    description:
      'A visual representation of sorting algorithms using D3.js. It animates the sorting process of various algorithms, such as Bubble Sort, Quick Sort, and Merge Sort.',
    href: '/visual-sort',
    beta: true,
    icon: <BarChartIcon sx={{ fontSize: 50 }} />,
  },
  {
    title: 'TBA',
    description: 'Ongoing project...',
  },
];

export const ProjectsSection = () => {
  const theme = useTheme();
  const { mode } = useThemeSwitcher();
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
          sx={{
            mt: 1,
            color: mode === 'dark' ? theme.palette.grey[100] : theme.palette.grey[800],
            fontStyle: 'italic',
          }}
        >
          Some personal projects that I made for my own use. I decided make a playground of them
          integrated in my portfolio.
        </ResponsiveTypography>

        <ProjectGrid
          sx={{
            mt: 1,
            flexDirection: {
              xs: 'column',
              sm: 'row',
            },
          }}
          projects={projects}
        />
      </Box>
    </Section>
  );
};
