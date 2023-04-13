import React from 'react';
import * as Styled from './styles';

export interface IconButtonProps extends React.PropsWithChildren {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export const IconButton: React.FC<IconButtonProps> = ({ children = null, onClick = () => {} }): JSX.Element => {
  return <Styled.Button onClick={onClick}>{children}</Styled.Button>;
};
