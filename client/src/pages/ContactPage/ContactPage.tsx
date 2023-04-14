import React, { forwardRef } from 'react';
import { ContactTemplate } from 'components/templates/ContactTemplate';
import { useSanityData } from 'hooks';
import type { Contact } from 'types/contact';
import { Section, Typography, Loader } from 'components';

export const ContactPage = forwardRef<HTMLDivElement>((_, ref): JSX.Element | null => {
  const { data, error, isFetching } = useSanityData<Contact[]>('contact');

  return (
    <Section ref={ref} id="contact">
      {!!error && <Typography variant="h1">There was an error loading the data...</Typography>}
      {isFetching && <Loader />}
      {data && <ContactTemplate email={data[0].email} phone={data[0].phone} />}
    </Section>
  );
});
