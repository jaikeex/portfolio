import styled from '@emotion/styled';
import { device } from 'styles/breakpoints';

export const ContactLinks = styled('div')({
  display: 'flex',
  justifyContent: 'space-evenly',
  alignItems: 'center',
  flexWrap: 'wrap',
  margin: '4rem 2rem 2rem',
  gap: '1rem',

  [device.md]: {
    gap: '4rem'
  }
});
