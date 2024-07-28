import { Box, Divider, List, Typography, useTheme } from '@mui/material';

import { getYearsOfExperience } from '@/utils/dates';

import { Section } from '../section';
import { ExperienceItem } from './item';

const EXPERIENCES = [
  {
    title: 'Software Engineer (Full Stack)',
    startDate: '2020-07-01',
    present: true,
    description:
      'I have significant experience in developing and managing web and mobile applications across various industries, utilizing a diverse tech stack that includes React.js, React Native, Django, Python, Vue.js, and AWS. My roles have encompassed full project lifecycle management, including deployment, development, code reviews, and QA testing. I have successfully enhanced performance and efficiency in applications, such as improving job ingestion speed for a job app and optimizing loading times for a health insurance app. My work has also involved integrating key features like authentication, notifications, and in-app subscriptions, leading to substantial improvements in user experience and operational efficiency.',
  },
  {
    title: '5G R&D Engineer',
    startDate: '2018-07-01',
    endDate: '2020-06-30',
    description:
      'As a 5G Research and Development Engineer at Nokia from July 2018 to June 2020, I specialized in developing embedded systems for 5G Core and Radio Access Network components within an Agile environment. My core responsibilities included analysis, design, documentation, cost estimation, development, testing, code reviews, and maintenance. I resolved risk items, ensuring 100% delivery accuracy across eight sprints, and led the team in adapting to specification changes. Additionally, as a Code Guard, I reviewed code for alignment with standards, enforced rigorous testing, and reduced code-review duration by 50%. As Deputy Scrum Master, I facilitated scrum ceremonies, managed artifacts, and ensured alignment with organizational priorities.',
  },
];

export const ExperienceSection = () => {
  const theme = useTheme();
  return (
    <Section id="Experience">
      <Box
        sx={{
          width: { s: '100%', md: 900 },
          alignSelf: 'center',
        }}
      >
        <Typography variant="h4" sx={{ fontWeight: '600' }}>
          Experience Summary
        </Typography>

        <Divider sx={{ borderBottom: `1px solid ${theme.palette.grey[600]}`, my: 2 }} />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 3,
          }}
        >
          {EXPERIENCES.map((experience, index) => (
            <ExperienceItem
              key={experience.title}
              {...experience}
              divider={index !== EXPERIENCES.length - 1}
            />
          ))}
        </Box>
      </Box>
    </Section>
  );
};
