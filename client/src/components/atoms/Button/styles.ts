import styled from '@emotion/styled';

export const Button = styled('button')((props) => ({
  border: 'none',
  boxSizing: 'border-box',
  borderRadius: '5px',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '0.5rem',
  transition: 'background-color 0.2s',
  cursor: props.disabled ? 'default' : 'pointer',
  padding: '0.5rem 1rem',
  backgroundColor: props.theme.colors.buttonPrimary,

  '&:hover': {
    backgroundColor: props.theme.colors.buttonSecondary
  }
}));
