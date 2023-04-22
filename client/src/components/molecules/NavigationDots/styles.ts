import styled from '@emotion/styled';
import { Link as ScrollLink } from 'react-scroll';
import { device } from 'theme/breakpoints';

export const Root = styled('div')({
  display: 'none',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'fixed',
  top: '50%',
  right: '2rem',
  transform: 'translateY(-50%)',
  zIndex: 20,

  [device.md]: {
    display: 'flex'
  }
});

export const Dot = styled(ScrollLink, {
  shouldForwardProp(propName) {
    return propName !== 'active';
  }
})<{ active: boolean }>((props) => ({
  width: '10px',
  height: '10px',
  borderRadius: '50%',
  margin: '8px',
  cursor: 'pointer',
  transition: 'all 0.2s ease-in-out',
  backgroundColor: props.theme.colors.grey.medium,

  '&:hover': {
    transform: 'scale(1.2)'
  },

  ...(props.active && {
    backgroundColor: props.theme.colors.accent
  })
}));
