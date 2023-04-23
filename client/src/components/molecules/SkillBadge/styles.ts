import styled from '@emotion/styled';
import { SkillBadgeProps } from './SkillBadge';
import { device } from 'theme';

export const Img = styled('div')<SkillBadgeProps>((props) => ({
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
    boxShadow: `0 0 25px ${props.bgColor || props.theme.colors.grey.light}`
  },

  [device.xl]: {
    width: '4rem',
    height: '4rem'
  }
}));
