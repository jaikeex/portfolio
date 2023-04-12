import React from 'react';

type Variant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';

export type TypographyOwnProps<T extends Variant> = {
  variant?: T;
};

type TypographyProps<T extends Variant> = TypographyOwnProps<T> &
  Omit<React.ComponentProps<T>, keyof TypographyOwnProps<T> | 'ref'>;

export const Typography = <T extends Variant = 'p'>({
  children = '',
  variant,
  ...props
}: TypographyProps<T>): JSX.Element => {
  const Element = variant || 'p';
  return <Element {...props}>{children}</Element>;
};
