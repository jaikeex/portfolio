import React from 'react';
import * as Styled from './styles';

export interface DividerProps {}

export const Divider: React.FC<DividerProps> = ({}): JSX.Element => {
  return <Styled.Hr />;
};
