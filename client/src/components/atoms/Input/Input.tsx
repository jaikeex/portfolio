import styled from '@emotion/styled';

export const Input = styled('input')((props) => ({
  width: '100%',
  padding: '1rem',
  border: 'none',
  borderRadius: '6px',
  fontFamily: 'Open Sans',
  fontSize: '0.913rem',
  outline: 'none',
  backgroundColor: props.theme.colors.input,
  color: props.theme.colors.textSecodnary,

  '&::placeholder': {
    color: 'rgba(0, 0, 0, 0.75)'
  }
}));
