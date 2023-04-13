import React from 'react';
import * as Styled from './styles';

export interface ButtonProps extends React.PropsWithChildren, React.ComponentProps<'button'> {}

export const Button: React.FC<ButtonProps> = ({ children, ...props }): JSX.Element => {
  return (
    <Styled.Button className="button" {...props}>
      {children}
    </Styled.Button>
  );
};
