import { urlFor } from 'utils/sanity-client';
import { HoverHighlight, Typography } from 'components/atoms';
import React from 'react';
import type { HighlightData } from 'types/about';
import * as Styled from './styles';

type AboutTemplateProps = {
  highlights: HighlightData[];
  introduction: string[];
};

export const AboutTemplate: React.FC<AboutTemplateProps> = ({ introduction, highlights }): JSX.Element => (
  <React.Fragment>
    <Typography variant="h1">About me</Typography>
    <Styled.Introduction>
      {introduction.map((paragraph, index) => (
        <Typography key={index} size="md" style={{ marginBottom: '1rem' }}>
          {paragraph}
        </Typography>
      ))}
    </Styled.Introduction>
    <Styled.Highlights>
      {highlights.map((highlight, index) => (
        <HoverHighlight key={highlight.title + index}>
          <img src={urlFor(highlight.imgUrl).url()} alt={highlight.title} />
          <Typography variant="h3" align="center" style={{ marginTop: 20, width: '100%' }}>
            {highlight.title}
          </Typography>
          <Typography align="center" size="sm" style={{ marginTop: 10, width: '100%' }}>
            {highlight.description}
          </Typography>
        </HoverHighlight>
      ))}
    </Styled.Highlights>
    <Styled.Animation position="right" flip />
    <Styled.Animation position="left" />
  </React.Fragment>
);
