import styled from '@emotion/styled';

export const TextArea = styled('textarea')((props) => ({
  resize: 'none',
  maxLines: 10,
  width: '100%',
  height: '190px',
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
  },

  '&:-webkit-autofill': {
    backgroundColor: props.theme.colors.input
  }
}));
