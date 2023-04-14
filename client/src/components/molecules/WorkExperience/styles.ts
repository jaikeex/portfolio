import styled from '@emotion/styled';
import { motion } from 'framer-motion';

export const Root = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  gap: '3rem',
  margin: '1rem 0'
});

export const Info = styled(motion.div)({
  display: 'flex',
  flexDirection: 'column',
  gap: '5px',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  marginBottom: '1rem'
});
