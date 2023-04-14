import styled from '@emotion/styled';
import type { TypographyOwnProps } from './Typography';

export const Typography = styled('div')<TypographyOwnProps<any>>((props) => ({
  ...(props.size === 'sm' && {
    fontSize: '0.875rem'
  }),

  ...(props.size === 'md' && {
    fontSize: '1rem'
  }),

  ...(props.size === 'lg' && {
    fontSize: '1.125rem'
  })
}));
