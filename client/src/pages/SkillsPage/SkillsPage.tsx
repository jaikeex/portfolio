import React, { forwardRef } from 'react';
import { SkillsTemplate } from 'components';
import { useFetchData } from './useFetchData';

export const SkillsPage = forwardRef<HTMLDivElement>((_, ref): JSX.Element | null => {
  const { skills, experiences, isFetching, error } = useFetchData();

  if (error) {
    return <section>There was an error loading the data</section>;
  }

  if (isFetching) {
    return <section>Loading...</section>;
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
