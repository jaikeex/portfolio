import styled from '@emotion/styled';

export const Divider = styled('hr')((props) => ({
  border: 'none',
  backgroundColor: props.theme.colors.grey.medium,
  height: '1px',
  margin: '0.75rem 0'
}));
