import { Section, Typography } from 'components/atoms';
import { Project } from 'components/organisms';
import React from 'react';
import type { ProjectData } from 'types';
import * as Styled from './styles';

export interface ProjectsTemplateProps {
  projects: ProjectData[];
}

export const ProjectsTemplate: React.FC<ProjectsTemplateProps> = ({ projects }): JSX.Element => (
    <Section>
      <Typography variant="h1" align="center">
        My projects
      </Typography>
      <Styled.ProjectsList>
        {projects.map((project) => (
          <Project key={project.title} project={project} />
        ))}
      </Styled.ProjectsList>
    </Section>
  );
