import { Grid, GridOwnProps } from '@mui/material';
import React from 'react';

import { Project } from '@/types/landing';

import { ProjectCard } from './card';

type Props = {
  projects: Project[];
} & GridOwnProps;

export const ProjectGrid: React.FC<Props> = ({ projects, ...others }) => {
  return (
    <Grid container spacing={2} {...others}>
      {projects.map((project) => (
        <Grid item key={project.title}>
          <ProjectCard {...project} />
        </Grid>
      ))}
    </Grid>
  );
};
