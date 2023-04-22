import styled from '@emotion/styled';

export const Chip = styled('span')((props) => ({
  backgroundColor: props.theme.colors.backgroundPrimary,
  color: props.theme.colors.textPrimary,
  fontSize: '0.875rem',
  borderRadius: '999px',
  padding: '0.175rem 0.75rem',
  width: 'max-content'
}));
