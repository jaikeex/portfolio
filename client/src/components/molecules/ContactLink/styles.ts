import styled from '@emotion/styled';
import { Card } from 'components/atoms/Card';

export const Root = styled(Card)((props) => ({
  cursor: 'pointer',
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  flexWrap: 'wrap',

  '& > svg': {
    width: '30px',
    height: '30px',
    margin: '0 0.7rem'
  },

  '& span': {
    color: props.theme.colors.textSecodnary
  }
}));
