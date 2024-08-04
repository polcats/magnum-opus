import { useThemeSwitcher } from '@/hooks/useThemeSwitcher';
import { Box, useTheme } from '@mui/material';
import { Section } from './section';
import { ResponsiveTypography } from '../theme/typography';

export const FooterSection = () => {
  const theme = useTheme();
  const { mode } = useThemeSwitcher();
  return (
    <Section
      id="Footer"
      sx={{
        minHeight: '50px',
        py: 1,
        userSelect: 'none',
      }}
    >
      <Box
        sx={{
          width: { xs: '100%', md: 900 },
          alignSelf: 'center',
          display: 'flex',
          justifyContent: 'center',
          height: '100%',
        }}
      >
        <ResponsiveTypography variant="caption" sx={{ textAlign: 'center' }}>
          &copy; Paul Jimuel Catalan 2024. All rights reserved.
        </ResponsiveTypography>
      </Box>
    </Section>
  );
};
