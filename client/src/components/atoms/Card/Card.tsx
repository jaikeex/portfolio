import styled from '@emotion/styled';

export const Card = styled('div')({
  borderRadius: '4px',
  backgroundColor: 'white',
  padding: '1rem',
  transition: 'all 0.3s ease-in-out',
  minWidth: '300px',

  '&:hover': {
    boxShadow: '0 0 15px white'
  }
});
