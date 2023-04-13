import { urlFor } from 'client';
import { Card, Typography } from 'components/atoms';
import { BackgroundAnimation } from 'components/atoms/Background/Background';
import React, { useMemo } from 'react';
import { Highlight } from 'types/about';
import * as Styled from './styles';

export interface AboutTemplateProps {
  highlights: Highlight[];
  introduction: string[];
}

export const AboutTemplate: React.FC<AboutTemplateProps> = ({ introduction, highlights }): JSX.Element => {
  const sortedHighlights = useMemo(() => highlights.sort((a, b) => a.importance - b.importance), highlights);

  return (
    <Styled.Section>
      <div className="app__section__component">
        <Typography variant="h1">About me</Typography>
        <Styled.Introduction>
          {introduction.map((paragraph: string) => (
            <Typography size="lg" style={{ marginBottom: '1rem' }}>
              {paragraph}
            </Typography>
          ))}
        </Styled.Introduction>
        <Styled.Highlights>
          {highlights.map((highlight, index) => (
            <Card key={highlight.title + index}>
              <img src={urlFor(highlight.imgUrl).url()} alt={highlight.title} />
              <Typography variant="h3" align="center" style={{ marginTop: 20, width: '100%' }}>
                {highlight.title}
              </Typography>
              <Typography align="center" size="sm" style={{ marginTop: 10, width: '100%' }}>
                {highlight.description}
              </Typography>
            </Card>
          ))}
        </Styled.Highlights>
      </div>
      <BackgroundAnimation />
    </Styled.Section>
  );
};
