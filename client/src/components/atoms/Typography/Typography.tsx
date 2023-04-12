import React, { forwardRef } from 'react';
import styles from './Typography.module.scss';
import clsx from 'clsx';

type Variant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';

export type TypographyOwnProps<T extends Variant> = {
  size?: 'sm' | 'md' | 'lg';
  variant?: T;
  weight?: 300 | 400 | 500 | 600 | 700;
};

type TypographyProps<T extends Variant> = TypographyOwnProps<T> &
  Omit<React.ComponentProps<T>, keyof TypographyOwnProps<T> | 'ref'>;

export const Typography = forwardRef(
  <T extends Variant = 'p'>(
    { className = '', children = '', size, style, variant, weight, ...props }: TypographyProps<T>,
    ref: any
  ): JSX.Element => {
    const Element = variant || 'p';

    const elementStyles: React.CSSProperties = { ...style };

    if (weight) {
      elementStyles.fontWeight = weight;
    }

    return (
      <Element
        ref={ref}
        style={elementStyles}
        className={clsx(className, size && styles[`typography--${size}`])}
        {...props}
      >
        {children}
      </Element>
    );
  }
);
