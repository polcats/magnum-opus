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
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
        <Typography variant="h5" sx={{ fontWeight: '600' }}>
          {title}
        </Typography>
        <Typography variant="subtitle1">
          {start} &mdash; {end} ▪{' '}
          {getYearsOfExperience(new Date(startDate), endDate ? new Date(endDate) : undefined)}
        </Typography>{' '}
      </Box>

      <Typography
        variant="body1"
        sx={{
          mt: 1,
          color: theme.palette.grey[100],
          textIndent: 30,
          lineHeight: 1.6,
        }}
      >
        {description}
      </Typography>
      {divider && <Divider sx={{ borderBottom: `1px solid ${theme.palette.grey[800]}`, mt: 2 }} />}
    </Box>
  );
};
