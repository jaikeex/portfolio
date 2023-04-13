import React from 'react';
import * as Styled from './styles';

export interface CardProps extends React.PropsWithChildren {}

export const Card: React.FC<CardProps> = ({ children }): JSX.Element => {
  return (
    <Styled.Root
      whileInView={{ opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      transition={{ duration: 0.5, type: 'tween' }}
      className="app__profile-item"
    >
      {children}
    </Styled.Root>
  );
};
