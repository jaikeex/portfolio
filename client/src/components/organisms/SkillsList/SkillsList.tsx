import React from 'react';
import { Typography } from 'components/atoms';
import type { Skill } from 'types';
import { urlFor } from 'utils/sanity-client';
import * as Styled from './styles';
import { SkillBadge } from 'components/molecules';

export interface SkillsListProps {
  heading?: string;
  hideLabel?: boolean;
  size?: 'small' | 'standard';
  skills?: Skill[];
}

export const SkillsList: React.FC<SkillsListProps> = ({
  heading,
  hideLabel = false,
  size = 'standard',
  skills = []
}): JSX.Element => (
  <Styled.Root>
    {heading && <Typography variant="h3">{heading}</Typography>}
    <Styled.Item>
      {skills.map((skill) => (
        <SkillBadge
          key={skill.name}
          src={urlFor(skill.icon).url()}
          size={size}
          alt={skill.name}
          label={hideLabel ? undefined : skill.name}
          bgColor={skill.bgColor}
        />
      ))}
    </Styled.Item>
  </Styled.Root>
);
