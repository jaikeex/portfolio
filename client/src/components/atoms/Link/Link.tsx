/** @jsxImportSource @emotion/react */
import React from 'react';

export interface LinkProps extends React.PropsWithChildren {
  className?: string;
  href: string;
}

export const Link: React.FC<LinkProps> = ({ children, className, href }): JSX.Element => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={className}
      css={{
        '&, &:link, &:visited': {
          textDecoration: 'none',
          cursor: 'pointer'
        }
      }}
    >
      {children}
    </a>
  );
};
