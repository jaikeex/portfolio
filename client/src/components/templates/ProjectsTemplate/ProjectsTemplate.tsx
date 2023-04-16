import { Typography } from 'components/atoms';
import { Project } from 'components/organisms';
import React, { useMemo } from 'react';
import type { ProjectData } from 'types';
import * as Styled from './styles';

type ProjectsTemplateProps = {
  projects: ProjectData[];
};

export const ProjectsTemplate: React.FC<ProjectsTemplateProps> = ({ projects }): JSX.Element => {
  const sortedProjects = useMemo(() => projects.sort((a, b) => a.importance - b.importance), [projects]);

  return (
    <React.Fragment>
      <Typography variant="h1" align="center">
        My projects
      </Typography>
      <Styled.ProjectsList>
        {sortedProjects.map((project) => (
          <Project key={project.title} project={project} />
        ))}
      </Styled.ProjectsList>
    </React.Fragment>
  );
};
