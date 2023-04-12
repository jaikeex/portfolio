import React from 'react';
import styles from './SkillsList.module.scss';
import { SkillBadge } from 'components/atoms';
import type { Skill } from 'types';
import { urlFor } from 'client';

export interface SkillsListProps {
  heading?: string;
  size?: 'small' | 'standard';
  skills: Skill[];
}

export const SkillsList: React.FC<SkillsListProps> = ({ heading, size = 'standard', skills = [] }): JSX.Element => {
  return (
    <div className={styles['skills-list']}>
      {heading && <h4 className={styles['skills-list__heading']}>{heading}</h4>}
      <div className={styles['skills-list__items']}>
        {skills.map((skill) => (
          <SkillBadge
            key={skill.name}
            src={urlFor(skill.icon).url()}
            size={size}
            alt={skill.name}
            label={skill.name}
            bgColor={skill.bgColor}
          />
        ))}
      </div>
    </div>
  );
};
