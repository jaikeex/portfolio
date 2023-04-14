import React from 'react';
import { Typography } from 'components/atoms';
import { ContactForm } from 'components/organisms/ContactForm';
import { FaEnvelope, FaPhoneSquare } from 'react-icons/fa';
import { ContactLink } from 'components/molecules/ContactLink';
import * as Styled from './styles';

type ContactTemplateProps = {
  email: string;
  phone: string;
};

export const ContactTemplate: React.FC<ContactTemplateProps> = ({ email, phone }): JSX.Element => (
  <React.Fragment>
    <Typography variant="h1" className="head-text" removeMargin>
      Take a coffee & chat with me
    </Typography>
    <Styled.ContactLinks>
      <ContactLink icon={<FaPhoneSquare />} href={`tel:${phone}`}>
        {phone}
      </ContactLink>
      <ContactLink icon={<FaEnvelope />} href={`mailto:${email}`}>
        {email}
      </ContactLink>
    </Styled.ContactLinks>
    <Typography variant="h3">Or leave me a message</Typography>
    <ContactForm />
  </React.Fragment>
);
