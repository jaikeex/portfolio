import styled from '@emotion/styled';
import { TechnologyIconProps } from './TechnologyIcon';

export const Button = styled('div')<TechnologyIconProps>((props) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  '& img': {
    ...(props.size === 'small' && {
      width: '1.25rem',
      height: '1.25rem'
    }),

    ...(props.size === 'standard' && {
      width: '2rem',
      height: '2rem'
    })
  }
}));
