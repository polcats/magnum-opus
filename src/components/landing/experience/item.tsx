import { ResponsiveTypography } from '@/components/theme/typography';
import { getMonthNameAndYear, getYearsOfExperience } from '@/utils/dates';
import { Box, Divider, Typography, useTheme } from '@mui/material';

type ExperienceItem = {
  title: string;
  description: string;
  startDate: string;
  endDate?: string;
  present?: boolean;
  divider: boolean;
};
export const ExperienceItem: React.FC<ExperienceItem> = ({
  title,
  description,
  startDate,
  endDate,
  present,
  divider,
}) => {
  const theme = useTheme();
  const start = getMonthNameAndYear(startDate);
  const end = present ? 'Present' : getMonthNameAndYear(endDate);

  return (
    <Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: {
            xs: 'column',
            md: 'row',
          },
          justifyContent: 'space-between',
        }}
      >
        <ResponsiveTypography
          variant="h5"
          sx={{
            fontWeight: '600',
          }}
        >
          {title}
        </ResponsiveTypography>
        <ResponsiveTypography variant="subtitle1">
          {start} &mdash; {end} ▪{' '}
          {getYearsOfExperience(new Date(startDate), endDate ? new Date(endDate) : undefined)}
        </ResponsiveTypography>
      </Box>

      <ResponsiveTypography
        variant="body1"
        sx={{
          mt: 1,
          color: theme.palette.grey[100],
          textIndent: 30,
          lineHeight: 1.6,
        }}
      >
        {description}
      </ResponsiveTypography>
      {divider && <Divider sx={{ borderBottom: `1px solid ${theme.palette.grey[800]}`, mt: 2 }} />}
    </Box>
  );
};
