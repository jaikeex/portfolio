import React from 'react';
import styles from './SkillsList.module.scss';
import { SkillBadge, Typography } from 'components/atoms';
import type { Skill } from 'types';
import { urlFor } from 'client';
import { usePopperTooltip } from 'react-popper-tooltip';

export interface SkillsListProps {
  heading?: string;
  hideLabel?: boolean;
  removeMargin?: boolean;
  size?: 'small' | 'standard';
  skills: Skill[];
}

export const SkillsList: React.FC<SkillsListProps> = ({
  heading,
  hideLabel = false,
  removeMargin = false,
  size = 'standard',
  skills = []
}): JSX.Element => {
  return (
    <div className={styles['skills-list']} style={removeMargin ? { margin: 0 } : {}}>
      {heading && (
        <Typography variant="h3" className={styles['skills-list__heading']}>
          {heading}
        </Typography>
      )}
      <div className={styles['skills-list__items']}>
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
      </div>
    </div>
  );
};
