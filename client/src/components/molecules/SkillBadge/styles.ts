import styled from '@emotion/styled';
import { SkillBadgeProps } from './SkillBadge';

export const Img = styled('div')((props) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  margin: '1.25rem',
  width: '3.125rem',
  height: '3.125rem',
  borderRadius: '50%',
  transition: 'all 0.3s ease-in-out',
  backgroundColor: props.theme.colors.backgroundSecondary,

  '&:hover': {
    boxShadow: `0 0 25px ${props.theme.colors.textSecodnary}`
  }
}));
