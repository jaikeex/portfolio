import React, { forwardRef, useMemo } from 'react';
import * as Styled from './styles';
import type { TypographyVariant } from 'types';

type TextAlign = 'left' | 'right' | 'center' | 'justify' | 'initial' | 'inherit';

export type TypographyOwnProps<T extends TypographyVariant> = {
  align?: TextAlign;
  removeMargin?: boolean;
  size?: 'sm' | 'md' | 'lg';
  variant?: T;
  weight?: 300 | 400 | 500 | 600 | 700;
};

type TypographyProps<T extends TypographyVariant> = TypographyOwnProps<T> &
  Omit<React.ComponentProps<T>, keyof TypographyOwnProps<T> | 'ref'>;

export const Typography = forwardRef(
  <T extends TypographyVariant = 'p'>(
    {
      align,
      className = '',
      children = '',
      removeMargin = false,
      size,
      style,
      variant,
      weight,
      ...props
    }: TypographyProps<T>,
    ref: any
  ): JSX.Element => {
    const element = variant || 'p';

    const styles = useMemo(() => {
      const elementStyles: React.CSSProperties = { ...style };

      if (weight) {
        elementStyles.fontWeight = weight;
      }

      if (align) {
        elementStyles.textAlign = align;
      }

      if (removeMargin) {
        elementStyles.marginBottom = 0;
      }

      return elementStyles;
    }, [align, weight, removeMargin, style]);

    return (
      <Styled.Typography as={element} ref={ref} style={styles} className={className} size={size} {...props}>
        {children}
      </Styled.Typography>
    );
  }
);
