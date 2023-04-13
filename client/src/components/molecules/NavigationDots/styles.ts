import styled from '@emotion/styled';
import { mq } from 'themes/breakpoints';
import { NavigationDotsProps } from './NavigationDots';
import { Link as ScrollLink } from 'react-scroll';

export const Root = styled('div')(
  mq({
    display: ['flex', 'none', 'none'],
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'fixed',
    top: '50%',
    right: '2rem',
    transform: 'translateY(-50%)'
  })
);

export const Dot = styled(ScrollLink)<{ active: boolean }>((props) => ({
  width: '10px',
  height: '10px',
  borderRadius: '50%',
  margin: '8px',
  cursor: 'pointer',
  transition: 'all 0.2s ease-in-out',
  backgroundColor: props.theme.colors.buttonPrimary,

  '&:hover': {
    transform: 'scale(1.2)'
  },

  ...(props.active && {
    backgroundColor: props.theme.colors.buttonSecondary
  })
}));
