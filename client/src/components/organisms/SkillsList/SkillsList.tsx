import React from 'react';
import { Typography } from 'components/atoms';
import type { SkillData } from 'types';
import { urlFor } from 'utils/sanity-client';
import * as Styled from './styles';
import { SkillBadge } from 'components/molecules';

export type SkillsListProps = {
  heading?: string;
  hideLabel?: boolean;
  skills?: SkillData[];
};

export const SkillsList: React.FC<SkillsListProps> = ({ heading, hideLabel = false, skills = [] }): JSX.Element => (
  <Styled.Root>
    {heading ? <Typography variant="h3">{heading}</Typography> : null}
    <Styled.Item>
      {skills.map((skill) => (
        <SkillBadge
          key={skill.name}
          src={urlFor(skill.icon).url()}
          alt={skill.name}
          label={hideLabel ? undefined : skill.name}
          bgColor={skill.bgColor}
        />
      ))}
    </Styled.Item>
  </Styled.Root>
);
