import styled from '@emotion/styled';
import { device } from 'theme/breakpoints';

export const Root = styled('div')({
  position: 'fixed',
  width: '100%',
  top: 0,

  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',

  padding: '1rem 2rem',
  backgroundColor: 'rgba(50, 50, 50, 0.75)',
  backdropFilter: 'blur(4px)',
  border: '1px solid rgba(50, 50, 50, 0.25)',
  zIndex: '10'
});

export const Links = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  alignContent: 'center',
  position: 'absolute',
  left: '50%',
  transform: 'translateX(-50%)',
  listStyle: 'none'
});

export const NavbarLink = styled('a')((props) => ({
  margin: '0 1rem',
  display: 'none',

  textDecoration: 'none',
  textTransform: 'uppercase',
  fontWeight: 500,
  color: props.theme.colors.textPrimary,

  transition: 'all 0.2s',

  '&:hover': {
    color: props.theme.colors.accent
  },

  [device.sm]: {
    display: 'block'
  }
}));

export const MobileMenuButton = styled('div')((props) => ({
  width: '35px',
  height: '35px',
  borderRadius: '50%',
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: props.theme.colors.backgroundSecondary,

  '& svg': {
    width: '70%',
    height: '70%',
    color: 'white'
  },

  [device.sm]: {
    display: 'none'
  }
}));
