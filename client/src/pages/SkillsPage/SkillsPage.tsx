import React, { forwardRef } from 'react';
import { Loader, Section, SkillsTemplate, Typography } from 'components';
import { useFetchData } from './useFetchData';

export const SkillsPage = forwardRef<HTMLDivElement>((_, ref): JSX.Element | null => {
  const { skills, experiences, isFetching, error } = useFetchData();

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

  if (!skills || !experiences) {
    return null;
  }

  return (
    <div ref={ref} id="skills">
      <SkillsTemplate skills={skills} experiences={experiences} />
    </div>
  );
});
