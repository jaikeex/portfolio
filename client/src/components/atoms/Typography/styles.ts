import styled from '@emotion/styled';
import type { TypographyOwnProps } from './Typography';
import { device } from 'theme';

export const Typography = styled('div')<TypographyOwnProps<any>>((props) => ({
  ...(props.size === 'sm' && {
    fontSize: '0.875rem',

    [device.xl]: {
      fontSize: '1rem'
    }
  }),

  ...(props.size === 'md' && {
    fontSize: '1rem',

    [device.xl]: {
      fontSize: '1.25rem'
    }
  }),

  ...(props.size === 'lg' && {
    fontSize: '1.125rem',

    [device.xl]: {
      fontSize: '1.5rem'
    }
  })
}));
