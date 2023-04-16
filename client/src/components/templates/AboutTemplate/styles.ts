import styled from '@emotion/styled';
import { TitleAnimation } from 'components/atoms/TitleAnimation';
import { device } from 'theme/breakpoints';

export const Title = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '1.5rem',
  marginBottom: '2rem',
  width: '90%',

  [device.sm]: {
    width: '60%'
  },

  [device.md]: {
    width: '40%'
  },

  '& img': {
    width: '70px',
    borderRadius: '50%',

    [device.sm]: {
      width: '100px'
    }
  }
});

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

  '& > div': {
    width: '190px',

    [device.xl]: {
      width: '240px'
    }
  },

  '& img': {
    width: '100%',
    height: '170px',
    borderRadius: '15px',
    objectFit: 'cover',

    [device.xl]: {
      height: '220px'
    }
  },

  [device.xl]: {
    marginTop: '8rem'
  }
});

export const Animation = styled(TitleAnimation)<{ position: 'right' | 'left'; flip?: boolean }>((props) => ({
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
