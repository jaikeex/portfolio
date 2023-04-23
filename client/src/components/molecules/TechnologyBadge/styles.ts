import styled from '@emotion/styled';
import { Typography } from 'components/atoms/Typography';
import { device } from 'theme';

export const Tooltip = styled('span')({
  padding: '0.25rem',
  width: 'max-content',
  borderRadius: '4px',
  backgroundColor: '#444444',
  fontSize: '0.75rem',
  color: 'white',

  [device.xl]: {
    fontSize: '0.938rem'
  }
});
