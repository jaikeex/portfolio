import React, { forwardRef, useMemo } from 'react';
import * as Styled from './styles';

type Variant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
type TextAlign = 'left' | 'right' | 'center' | 'justify' | 'initial' | 'inherit';

export type TypographyOwnProps<T extends Variant> = {
  align?: TextAlign;
  size?: 'sm' | 'md' | 'lg';
  variant?: T;
  weight?: 300 | 400 | 500 | 600 | 700;
};

type TypographyProps<T extends Variant> = TypographyOwnProps<T> &
  Omit<React.ComponentProps<T>, keyof TypographyOwnProps<T> | 'ref'>;

export const Typography = forwardRef(
  <T extends Variant = 'p'>(
    { align = 'left', className = '', children = '', size, style, variant, weight, ...props }: TypographyProps<T>,
    ref: any
  ): JSX.Element => {
    const element = variant || 'p';

    const styles = useMemo(() => {
      const elementStyles: React.CSSProperties = { ...style };

      if (weight) {
        elementStyles.fontWeight = weight;
      }

      elementStyles.textAlign = align;

      return elementStyles;
    }, [align, weight]);

    return (
      <Styled.Typography as={element} ref={ref} style={styles} className={className} size={size} {...props}>
        {children}
      </Styled.Typography>
    );
  }
);
