import styled from '@emotion/styled';

export const Button = styled('button')((props) => ({
  border: 'none',
  padding: 0,
  backgroundColor: 'transparent',
  borderRadius: '50%',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  transition: 'all 0.15s',
  cursor: props.disabled ? 'default' : 'pointer',
  width: '2rem',
  height: '2rem',
  willChange: 'transform',

  '& svg': {
    fontSize: '1.5rem',
    flexShrink: 0,
    transition: 'fill 0.15s',
    fill: props.theme.colors.buttonPrimary
  },

  '&:hover': {
    transform: 'scale(1.1)',

    '& svg': {
      fill: props.theme.colors.buttonSecondary
    }
  },

  '&:active': {
    transform: 'scale(0.9)'
  }
}));
