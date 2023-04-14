import React, { forwardRef } from 'react';
import * as Styled from './styles';

export interface TechnologyIconProps {
  alt?: string;
  size?: 'small' | 'standard';
  src?: string;
}

export const TechnologyIcon = forwardRef<HTMLDivElement, TechnologyIconProps>(
  ({ alt = '', size = 'standard', src = '' }, ref): JSX.Element => (
      <Styled.Root size={size} ref={ref}>
        <img src={src} alt={alt} />
      </Styled.Root>
    )
);
