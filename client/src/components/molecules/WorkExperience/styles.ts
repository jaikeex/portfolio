import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { device } from 'theme';

export const Root = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  margin: '1rem 0',

  [device.sm]: {
    flexDirection: 'row',
    gap: '3rem'
  }
});

export const Info = styled(motion.div)({
  display: 'flex',
  flexDirection: 'column',
  gap: '5px',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  marginBottom: '1rem'
});

export const Description = styled('ul')((props) => ({
  '& li': {
    margin: '0 0 0.5rem 1rem',
    color: props.theme.colors.textPrimary
  }
}));
