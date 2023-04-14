import React from 'react';
import * as Styled from './styles';
import { Link, Typography } from 'components/atoms';

type ContactLinkProps = {
  icon?: React.ReactNode;
  href: string;
} & React.PropsWithChildren;

export const ContactLink: React.FC<ContactLinkProps> = ({ children, href, icon }): JSX.Element => (
    <Styled.Root>
      {icon && icon}
      <Link href={href}>
        <Typography variant="span" size="sm">
          {children}
        </Typography>
      </Link>
    </Styled.Root>
  );
