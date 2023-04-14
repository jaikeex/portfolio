import styled from '@emotion/styled';
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