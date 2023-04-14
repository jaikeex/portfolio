import styled from '@emotion/styled';
import { mq, mqMax, mqMin } from 'theme/breakpoints';

export const Section = styled('section')(
  mqMin({
    minHeight: '100vh',
    width: '100%',
    padding: ['6rem 1rem', '6rem 1rem', '6rem 1rem', '6rem 1rem'],
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  })
);
