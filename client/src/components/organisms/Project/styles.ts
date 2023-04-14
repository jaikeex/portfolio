import styled from '@emotion/styled';

export const Root = styled('div')((props) => ({
  width: '20rem',
  position: 'relative',
  flexShrink: 0,
  backgroundColor: props.theme.colors.backgroundSecondary,
  overflow: 'hidden',

  display: 'flex',
  flexDirection: 'column',
  borderRadius: '5px'
}));

export const ProjectImg = styled('div')({
  flexShrink: '0',
  width: '100%',
  height: '200px',

  '& img': {
    width: '100%',
    height: '100%',
    objectFit: 'cover'
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
  margin: '2rem 0',
  flexWrap: 'wrap'
});

export const ProjectLinks = styled('div')({
  display: 'flex',
  gap: '1.5rem',
  marginTop: 'auto'
});