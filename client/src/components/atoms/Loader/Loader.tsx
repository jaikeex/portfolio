import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

const loaderAnimation = keyframes({
  from: {
    transform: 'rotate(0deg)'
  },
  to: {
    transform: 'rotate(360deg)'
  }
});

export const Loader = styled('div')((props) => ({
  border: `5px solid ${props.theme.colors.accent}`,
  borderBottomColor: 'transparent',
  borderRadius: '50%',
  display: 'inline-block',
  animation: `${loaderAnimation} 1s linear infinite`,
  width: '3rem',
  height: '3rem'
}));
