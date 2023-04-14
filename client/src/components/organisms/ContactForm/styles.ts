import styled from '@emotion/styled';
import { device } from 'styles/breakpoints';

export const Form = styled('form')({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',

  [device.sm]: {
    width: '60%'
  },

  [device.md]: {
    width: '40%'
  }
});
