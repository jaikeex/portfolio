import styled from '@emotion/styled';
import { TitleAnimation } from 'components/atoms/TitleAnimation';
import { device } from 'theme/breakpoints';

export const Introduction = styled('div')({
  width: '90%',

  [device.sm]: {
    width: '60%'
  },

  [device.md]: {
    width: '40%'
  }
});

export const Highlights = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexWrap: 'wrap',
  gap: '6rem',
  marginTop: '2rem',

  '& img': {
    width: '100%',
    height: '170px',
    borderRadius: '15px',
    objectFit: 'cover'
  }
});

export const Animation = styled(TitleAnimation)<{ position: 'right' | 'left'; flip?: boolean; }>((props) => ({
  display: 'none',
  width: '400px',
  position: 'absolute',
  top: '15%',
  transform: props.flip ? 'scale(-1, 1)' : '',

  ...(props.position === 'left' && {
    left: '5%'
  }),

  ...(props.position === 'right' && {
    right: '5%'
  }),

  [device.md]: {
    display: 'block'
  }
}));
