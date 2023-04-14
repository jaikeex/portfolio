import React, { forwardRef } from 'react';
import { Loader, Section, SkillsTemplate, Typography } from 'components';
import { useFetchData } from './useFetchData';

export const SkillsPage = forwardRef<HTMLDivElement>((_, ref): JSX.Element | null => {
  const { skills, experiences, isFetching, error } = useFetchData();

  return (
    <Section ref={ref} id="skills">
      {!!error && <Typography variant="h1">There was an error loading the data...</Typography>}
      {isFetching && <Loader />}
      {skills && experiences && <SkillsTemplate skills={skills} experiences={experiences} />}
    </Section>
  );
});
