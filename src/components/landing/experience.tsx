import { Box, Divider, Typography, useTheme } from '@mui/material';

import { getYearsOfExperience } from '@/utils/dates';

import { Section } from './section';

export const ExperienceSection = () => {
  const theme = useTheme();
  return (
    <Section id="Experience">
      <Box sx={{ width: { lg: 1000, md: '100%' }, alignSelf: 'center' }}>
        <Typography variant="h3" sx={{ fontWeight: '600' }}>
          Experience Summary
        </Typography>

        <Divider sx={{ mt: 2, mb: 2 }} />

        <Typography variant="h4">
          Software Engineer ▪ {getYearsOfExperience(new Date('2020-07-01'))}
        </Typography>
        <Typography variant="h5">Mahusai Inc. </Typography>
        <Typography
          variant="body1"
          sx={{
            mt: 1,
            color: theme.palette.grey[100],
            textIndent: 30,
            textAlign: 'justify',
            lineHeight: 1.5,
          }}
        >
          I have significant experience in developing and managing web and mobile applications
          across various industries, utilizing a diverse tech stack that includes React.js, React
          Native, Django, Python, Vue.js, and AWS. My roles have encompassed full project lifecycle
          management, including deployment, development, code reviews, and QA testing. I have
          successfully enhanced performance and efficiency in applications, such as improving job
          ingestion speed for a job app and optimizing loading times for a health insurance app. My
          work has also involved integrating key features like authentication, notifications, and
          in-app subscriptions, leading to substantial improvements in user experience and
          operational efficiency.
        </Typography>

        <Divider sx={{ mt: 2, mb: 2 }} />

        <Typography variant="h4">
          5G R&D Engineer ▪ {getYearsOfExperience(new Date('2018-07-01'), new Date('2020-06-30'))}
        </Typography>
        <Typography variant="h5">Nokia Technology Center Philippines Inc.</Typography>
        <Typography
          variant="body1"
          sx={{
            mt: 1,
            color: theme.palette.grey[100],
            textIndent: 30,
            textAlign: 'justify',
            lineHeight: 1.5,
          }}
        >
          As a 5G Research and Development Engineer at Nokia from July 2018 to June 2020, I
          specialized in developing embedded systems for 5G Core and Radio Access Network components
          within an Agile environment. My core responsibilities included analysis, design,
          documentation, cost estimation, development, testing, code reviews, and maintenance. I
          resolved risk items, ensuring 100% delivery accuracy across eight sprints, and led the
          team in adapting to specification changes. Additionally, as a Code Guard, I reviewed code
          for alignment with standards, enforced rigorous testing, and reduced code-review duration
          by 50%. As Deputy Scrum Master, I facilitated scrum ceremonies, managed artifacts, and
          ensured alignment with organizational priorities.
        </Typography>
      </Box>
    </Section>
  );
};
