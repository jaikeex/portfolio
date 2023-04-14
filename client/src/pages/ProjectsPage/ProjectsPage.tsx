import { Section, Typography, Loader } from 'components';
import { ProjectsTemplate } from 'components/templates/ProjectsTemplate';
import { useSanityData } from 'hooks';
import React, { forwardRef } from 'react';
import type { ProjectData } from 'types';

export const ProjectsPage = forwardRef<HTMLDivElement>((_, ref): JSX.Element | null => {
  const { data, error, isFetching } = useSanityData<ProjectData[]>('projects');

  if (error) {
    return (
      <Section>
        <Typography variant="h1">There was an error loading the data...</Typography>
      </Section>
    );
  }

  if (isFetching) {
    return (
      <Section>
        <Loader />
      </Section>
    );
  }

  if (!data) {
    return null;
  }

  return (
    <div ref={ref} id="projects">
      <ProjectsTemplate projects={data} />
    </div>
  );
});
