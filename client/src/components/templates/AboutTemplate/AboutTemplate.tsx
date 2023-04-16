import { urlFor } from 'utils/sanity-client';
import { HoverHighlight, Typography } from 'components/atoms';
import React, { useMemo } from 'react';
import type { HighlightData } from 'types/about';
import * as Styled from './styles';
import { images } from 'assets';

type AboutTemplateProps = {
  highlights: HighlightData[];
  introduction: string[];
};

export const AboutTemplate: React.FC<AboutTemplateProps> = ({ introduction, highlights }): JSX.Element => {
  const sortedHighlights = useMemo(() => highlights.sort((a, b) => a.importance - b.importance), [highlights]);

  return (
    <React.Fragment>
      <Styled.Title>
        <Typography variant="h1" removeMargin>
          About me
        </Typography>
        <img src={images.profile} alt="profile" />
      </Styled.Title>
      <Styled.Introduction>
        {introduction.map((paragraph, index) => (
          <Typography key={index} style={{ marginBottom: '1rem' }}>
            {paragraph}
          </Typography>
        ))}
      </Styled.Introduction>
      <Styled.Highlights>
        {sortedHighlights.map((highlight, index) => (
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
};
