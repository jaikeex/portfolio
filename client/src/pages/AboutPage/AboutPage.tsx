import React, { forwardRef } from 'react';
import { AboutTemplate } from 'components/templates/AboutTemplate';
import { useSanityData } from 'hooks';
import { About } from 'types/about';

export const AboutPage = forwardRef<HTMLDivElement>((_, ref): JSX.Element | null => {
  const { data, error, isFetching } = useSanityData<About[]>('about');

  if (error) {
    return <section>There was an error loading the data</section>;
  }

  if (isFetching) {
    return <section>Loading...</section>;
  }

  if (!data) {
    return null;
  }

  return (
    <div ref={ref} id="about">
      <AboutTemplate highlights={data[0].highlights} introduction={data[0].introduction}></AboutTemplate>
    </div>
  );
});
