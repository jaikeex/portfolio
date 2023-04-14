import React from 'react';
import { Typography } from 'components/atoms';
import { ContactForm } from 'components/organisms/ContactForm';
import { FaEnvelope, FaPhoneSquare } from 'react-icons/fa';
import { Section } from 'components/atoms/Section';
import { ContactLink } from 'components/molecules/ContactLink';
import * as Styled from './styles';

export interface ContactTemplateProps {
  email: string;
  phone: string;
}

export const ContactTemplate: React.FC<ContactTemplateProps> = ({ email, phone }): JSX.Element => (
    <Section>
      <Typography variant="h1" className="head-text">
        Take a coffee & chat with me
      </Typography>
      <Styled.ContactLinks>
        <ContactLink icon={<FaEnvelope />} href={`mailto:${email}`}>
          {email}
        </ContactLink>
        <ContactLink icon={<FaPhoneSquare />} href={`tel:${phone}`}>
          {phone}
        </ContactLink>
      </Styled.ContactLinks>
      <ContactForm />
    </Section>
  );
