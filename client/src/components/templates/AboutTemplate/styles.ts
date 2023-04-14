import styled from '@emotion/styled';
import { mq } from 'theme';

export const Section = styled('section')({
  // display: 'grid',
  // gridTemplateColumns: '2fr 1fr',
  position: 'relative'
});

export const Introduction = styled('div')(
  mq({
    width: ['60%', '100%', '100%', '80%']
  })
);

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
