import React, { forwardRef } from 'react';
import { AboutTemplate } from 'components/templates/AboutTemplate';
import { useSanityData } from 'hooks';
import type { About } from 'types/about';
import { Loader, Section, Typography } from 'components';

export const AboutPage = forwardRef<HTMLDivElement>((_, ref): JSX.Element | null => {
  const { data, error, isFetching } = useSanityData<About[]>('about');

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
    <div ref={ref} id="about">
      <AboutTemplate highlights={data[0].highlights} introduction={data[0].introduction} />
    </div>
  );
});
