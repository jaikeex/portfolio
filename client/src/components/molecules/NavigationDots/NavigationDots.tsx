import React from 'react';
import * as Styled from './styles';

export interface NavigationDotsProps {
  active: number;
}

export const NavigationDots: React.FC<NavigationDotsProps> = ({ active = '' }): JSX.Element => (
    <Styled.Root>
      {['about', 'projects', 'skills', 'contact'].map((section, index) => (
        <Styled.Dot to={section} key={`nav-dot-${section}`} smooth={true} duration={10} active={active === index} />
      ))}
    </Styled.Root>
  );
