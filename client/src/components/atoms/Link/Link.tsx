import React from 'react';
import styles from './Link.module.scss';
import clsx from 'clsx';

export interface LinkProps extends React.PropsWithChildren {
  className?: string;
  href: string;
}

export const Link: React.FC<LinkProps> = ({ children, className, href }): JSX.Element => {
  return (
    <a href={href} target="_blank" rel="noreferrer" className={clsx(styles['link'], className)}>
      {children}
    </a>
  );
};
