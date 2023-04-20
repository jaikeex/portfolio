import React, { forwardRef } from 'react';
import * as Styled from './styles';

export interface TechnologyIconProps {
  alt?: string;
  size?: 'small' | 'standard';
  src?: string;
  style?: React.CSSProperties;
}

export const TechnologyIcon = forwardRef<HTMLDivElement, TechnologyIconProps>(
  ({ alt = '', size = 'standard', src = '', style = {} }, ref): JSX.Element => (
    <Styled.Root size={size} ref={ref} style={style}>
      <img src={src} alt={alt} />
    </Styled.Root>
  )
);
