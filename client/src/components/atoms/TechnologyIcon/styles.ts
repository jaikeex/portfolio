import styled from '@emotion/styled';
import type { TechnologyIconProps } from './TechnologyIcon';
import { device } from 'theme';

export const Root = styled('div')<TechnologyIconProps>((props) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  '& img': {
    ...(props.size === 'small' && {
      width: '1.25rem',
      height: '1.25rem',

      [device.xl]: {
        width: '1.5rem',
        height: '1.5rem'
      }
    }),

    ...(props.size === 'standard' && {
      width: '2rem',
      height: '2rem',

      [device.xl]: {
        width: '2.5rem',
        height: '2.5rem'
      }
    })
  }
}));
