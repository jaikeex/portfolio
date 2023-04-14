import styled from '@emotion/styled';
import type { SkillsListProps } from './SkillsList';
import { device } from 'theme/breakpoints';

export const Root = styled('div')<SkillsListProps>({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%',
  margin: '0 auto 5rem',

  [device.md]: {
    width: '80%'
  }
});

export const Item = styled('div')({
  flex: 1,
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  alignItems: 'center',
  margin: 0
});
