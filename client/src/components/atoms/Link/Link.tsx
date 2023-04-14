import styled from '@emotion/styled';

export const Link = styled('a')((props) => ({
  '&, &:link, &:visited': {
    textDecoration: 'none',
    cursor: 'pointer'
  }
}));
