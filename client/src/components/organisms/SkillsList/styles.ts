import styled from '@emotion/styled';
import { SkillsListProps } from './SkillsList';
import { mq } from 'themes/breakpoints';

export const Root = styled('div')<SkillsListProps>((props) =>
  mq({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: ['80%', '100%', '100%'],
    margin: '0 auto 3rem'
  })
);

export const Item = styled('div')({
  flex: 1,
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  alignItems: 'center',
  margin: 0
});
