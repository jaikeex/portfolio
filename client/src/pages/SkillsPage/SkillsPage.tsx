import React, { forwardRef } from 'react';
import { SkillsTemplate } from 'components';
import { useFetchData } from './useFetchData';

export const SkillsPage = forwardRef<HTMLDivElement>((_, ref): JSX.Element => {
  const { skills, experiences, isFetching, error } = useFetchData();

  if (error) {
    return <section>There was an error loading the data</section>;
  }

  if (isFetching) {
    return <section>Loading...</section>;
  }

  return (
    <section ref={ref} id="skills" className="app__section">
      <SkillsTemplate skills={skills} experiences={experiences} />
    </section>
  );
});
