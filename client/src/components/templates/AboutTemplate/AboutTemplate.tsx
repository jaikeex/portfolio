import { urlFor } from 'client';
import { HoverHighlight, Typography } from 'components/atoms';
import { BackgroundAnimation } from 'components/atoms/Background/Background';
import React, { useMemo } from 'react';
import { Highlight } from 'types/about';
import * as Styled from './styles';
import { Section } from 'components/atoms/Section';

export interface AboutTemplateProps {
  highlights: Highlight[];
  introduction: string[];
}

export const AboutTemplate: React.FC<AboutTemplateProps> = ({ introduction, highlights }): JSX.Element => {
  const sortedHighlights = useMemo(() => highlights.sort((a, b) => a.importance - b.importance), highlights);

  return (
    <Section>
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
      {/* <BackgroundAnimation style={{ position: 'absolute', width: '400px', top: '40%', left: '5%' }} />
      <BackgroundAnimation style={{ position: 'absolute', width: '400px', top: '40%', right: '5%' }} /> */}
    </Section>
  );
};
