import styled from '@emotion/styled';

export const Input = styled('input')({
  width: '100%',
  padding: '1rem',
  border: 'none',
  borderRadius: '6px',
  fontFamily: 'Open Sans',
  fontSize: '0.913rem',
  outline: 'none',
  backgroundColor: '#ADB0C3',
  color: '#202020',

  '&::placeholder': {
    color: 'rgba(0, 0, 0, 0.75)'
  }
});
