import styled from '@emotion/styled';
import { device } from 'theme';

export const Root = styled('div')((props) => ({
  width: '18rem',
  position: 'relative',
  flexShrink: 0,
  backgroundColor: props.theme.colors.backgroundSecondary,
  overflow: 'hidden',

  display: 'flex',
  flexDirection: 'column',
  borderRadius: '5px',

  [device.xl]: {
    width: '25rem'
  }
}));

export const ProjectImg = styled('div')((props) => ({
  flexShrink: '0',
  width: '100%',
  height: '200px',
  backgroundColor: props.theme.colors.textSecodnary,

  '& img': {
    width: '100%',
    height: '100%',
    objectFit: 'cover'
  }
}));

export const ProjectTags = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  gap: '0.25rem',
  marginTop: '-0.125rem',
  marginBottom: '0.375rem',
  overflow: 'hidden',
  '& > span': {
    flexShrink: 0
  }
});

export const ProjectInfo = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  flexGrow: 1,
  padding: '0.5rem 1rem'
});

export const ProjectTechnologies = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '1rem',
  margin: '1rem 0 1.5rem',
  flexWrap: 'wrap'
});

export const ProjectLinks = styled('div')({
  display: 'flex',
  justifyContent: 'space-around',
  gap: '0.5rem',
  marginTop: 'auto'
});
