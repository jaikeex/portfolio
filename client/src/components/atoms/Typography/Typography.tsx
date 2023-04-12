import React from 'react';

type Variant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';

export type TypographyOwnProps<T extends Variant> = {
  variant?: T;
  weight?: 300 | 400 | 500 | 600 | 700;
};

type TypographyProps<T extends Variant> = TypographyOwnProps<T> &
  Omit<React.ComponentProps<T>, keyof TypographyOwnProps<T> | 'ref'>;

export const Typography = <T extends Variant = 'p'>({
  children = '',
  style,
  variant,
  weight,
  ...props
}: TypographyProps<T>): JSX.Element => {
  const Element = variant || 'p';

  const elementStyles: React.CSSProperties = { ...style };

  if (weight) {
    elementStyles.fontWeight = weight;
  }

  return (
    <Element style={elementStyles} {...props}>
      {children}
    </Element>
  );
};
