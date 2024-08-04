import { Box, useTheme } from '@mui/material';
import FlightIcon from '@mui/icons-material/Flight';
import WebIcon from '@mui/icons-material/Web';
import ParkSharpIcon from '@mui/icons-material/ParkSharp';
import TagIcon from '@mui/icons-material/Tag';
import BarChartIcon from '@mui/icons-material/BarChart';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import RouteIcon from '@mui/icons-material/Route';
import MapIcon from '@mui/icons-material/Map';
import QrCodeIcon from '@mui/icons-material/QrCode';

import { useThemeSwitcher } from '@/hooks/useThemeSwitcher';
import { ResponsiveTypography } from '@/components/theme/typography';
import { Project } from '@/types/landing';

import { ProjectGrid } from './grid';
import { Section } from '../section';

const projects: Project[] = [
  {
    title: 'Portfolio Website',
    description:
      'This website is a portfolio of my projects, skills, and experiences. It is built with Next.js, TypeScript, and Material-UI. Currently integrating old projects to act like a playground.',
    icon: <WebIcon sx={{ fontSize: 50 }} />,
    tags: ['beta', 'ongoing'],
  },
  {
    title: 'Flight Tracker',
    description:
      'An app that tracks flights in real-time using the OpenSky Network API. It displays flight information, such as the flight path, speed, and altitude.',
    notes: "Limitations: The OpenSky Network API doesn't provide real-time data for all flights.",
    icon: <FlightIcon sx={{ fontSize: 50 }} />,
    href: '/flight-tracker',
    tags: ['beta', 'integrated', '2024'],
  },
  {
    title: 'Hazard Expert (Hex)',
    description: 'No details for now...',
    icon: <TagIcon sx={{ fontSize: 50 }} />,
    tags: ['private', 'ongoing'],
  },
  {
    title: 'Outdoor Gears',
    description:
      'An reservation app for outdoor gears. It allows users to reserve gears, view their reservations, and cancel them. It is built with Expo, React Native, TypeScript, and Firebase.',
    icon: <ParkSharpIcon sx={{ fontSize: 50 }} />,
    tags: ['private', '2022'],
  },
  {
    title: 'Qrofile',
    description:
      'Simplified digital profile exchange through QR codes. The original purpose of this project is to help establishments track and record visitors in a hassle-free manner during the pandemic.',
    icon: <QrCodeIcon sx={{ fontSize: 50 }} />,
    tags: ['2020'],
    href: 'https://github.com/polcats/qrofile-mobile',
  },
  {
    title: 'VisuAlgo',
    description:
      'An animated visualization of sorting algorithms using ReactJS. It supports various sorting algorithms, such as Bubble Sort, Selection Sort, and Shell Sort.',
    icon: <SignalCellularAltIcon sx={{ fontSize: 50 }} />,
    tags: ['2020'],
    href: 'https://polcats.github.io//VisuAlgo/',
  },
  {
    title: 'Visual Sort',
    description:
      'An animated visualization of sorting algorithms using Vanilla JavaScript, HTML, and CSS. It supports various sorting algorithms, such as Bubble Sort, Selection Sort, and Shell Sort.',
    icon: <BarChartIcon sx={{ fontSize: 50 }} />,
    tags: ['2020'],
    href: 'https://polcats.github.io//VisualSort/',
  },
  {
    title: 'Visual Search',
    description:
      'A animated visualization of searching algorithms using Javascript, HTML, and CSS.',
    icon: <RouteIcon sx={{ fontSize: 50 }} />,
    tags: ['2020'],
    href: 'https://polcats.github.io//VisualSearch/',
  },
  {
    title: 'Interactive Map: Saint Louis University',
    description:
      'This project from my college days is a working prototype of an interactive map framework made with SVGs. It uses HTML, CSS, and Vanilla JavaScript.',
    icon: <MapIcon sx={{ fontSize: 50 }} />,
    tags: ['2018'],
    href: 'https://polcats.github.io//InteractiveMap/',
  },
];

export const ProjectsSection = () => {
  const theme = useTheme();
  const { mode } = useThemeSwitcher();

  return (
    <Section id="Projects">
      <Box
        sx={{
          width: { sm: '100%', md: 900 },
          alignSelf: 'center',
        }}
      >
        <ResponsiveTypography variant="h4" sx={{ fontWeight: '600' }}>
          Personal Projects
        </ResponsiveTypography>
        <ResponsiveTypography
          variant="body1"
          sx={{
            mt: 1,
            color: mode === 'dark' ? theme.palette.grey[100] : theme.palette.grey[800],
            fontStyle: 'italic',
          }}
        >
          Some of these projects are integrated within this portfolio website.
        </ResponsiveTypography>
        <ProjectGrid
          sx={{
            mt: 1,
            flexDirection: {
              xs: 'column',
              sm: 'column',
              md: 'row',
            },
          }}
          projects={projects}
        />
      </Box>
    </Section>
  );
};
