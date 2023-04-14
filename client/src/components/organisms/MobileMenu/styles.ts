import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

const slideInAnimation = keyframes({
  to: {
    right: 0
  }
});

export const Root = styled('div')((props) => ({
  position: 'fixed',
  top: 0,
  right: '-100%',
  bottom: 0,
  zIndex: 100,

  animation: `${slideInAnimation} 0.25s forwards`,

  padding: '1rem',
  width: '300px',
  height: '100vh',

  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'flex-end',
  flexDirection: 'column',

  backgroundColor: props.theme.colors.backgroundSecondary,

  '& svg': {
    width: '35px',
    height: '35px',
    color: 'white',
    margin: '0.5rem 1rem'
  }
}));

export const Links = styled('ul')({
  listStyle: 'none',
  height: '100%',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',

  '& > li': {
    margin: '1rem'
  }
});

export const MobileNavLink = styled('a')((props) => ({
  color: props.theme.colors.textPrimary,
  textDecoration: 'none',
  fontSize: '1rem',
  textTransform: 'uppercase',
  fontWeight: 500,

  transition: 'all 0.3s',

  '&:hover': {
    color: props.theme.colors.accent
  }
}));
