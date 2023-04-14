import React, { forwardRef } from 'react';
import { ContactTemplate } from 'components/templates/ContactTemplate';
import { useSanityData } from 'hooks';
import { Contact } from 'types/contact';

export const ContactPage = forwardRef<HTMLDivElement>((_, ref): JSX.Element | null => {
  const { data, error, isFetching } = useSanityData<Contact[]>('contact');

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
    <div ref={ref} id="contact">
      <ContactTemplate email={data[0].email} phone={data[0].phone} />
    </div>
  );
});
