import { Section, Typography, Loader } from 'components';
import { ProjectsTemplate } from 'components/templates/ProjectsTemplate';
import { useSanityData } from 'hooks';
import React, { forwardRef } from 'react';
import type { ProjectData } from 'types';

export const ProjectsPage = forwardRef<HTMLDivElement>((_, ref): JSX.Element | null => {
  const { data, error, isFetching } = useSanityData<ProjectData[]>('projects');

  return (
    <Section ref={ref} id="projects">
      {!!error ? <Typography variant="h1">There was an error loading the data...</Typography> : null}
      {isFetching ? <Loader /> : null}
      {data ? <ProjectsTemplate projects={data} /> : null}
    </Section>
  );
});
