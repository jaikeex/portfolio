import styled from '@emotion/styled';

export const Root = styled('div')((props) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '1rem',

  '& a': {
    display: 'flex',
    alignItems: 'center'
  }
}));
