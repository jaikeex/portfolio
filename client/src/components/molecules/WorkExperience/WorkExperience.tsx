import React from 'react';
import type { Work } from 'types';
import { Typography } from 'components/atoms/Typography';
import * as Styled from './styles';

export interface WorkExperienceProps {
  experience: Work;
}

export const WorkExperience: React.FC<WorkExperienceProps> = ({ experience }): JSX.Element => (
    <Styled.Root>
      <div>
        <Typography variant="h4" weight={600}>
          {experience.year}
        </Typography>
      </div>
      <Styled.Info
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        data-tip
        data-for={experience.company}
        key={experience.company}
      >
        <Typography variant="h4" weight={500}>
          {experience.position}
        </Typography>
        <Typography weight={500}>{experience.company}</Typography>
        <Typography>{experience.desc}</Typography>
      </Styled.Info>
    </Styled.Root>
  );
