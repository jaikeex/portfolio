import React, { forwardRef, useMemo, useState } from 'react';
import styles from './SkillsTemplate.module.scss';
import { useSanityData } from 'hooks/useSanityData';
import { SkillsList, WorkExperience } from 'components';
import { Typography } from 'components/atoms/Typography';
import type { Skill, Work } from 'types';

export interface SkillsTemplateProps {
  skills: Skill[];
  experiences: Work[];
}

export const SkillsTemplate: React.FC<SkillsTemplateProps> = ({ skills, experiences }): JSX.Element => {
  const sortedSkills = useMemo(() => skills.sort((a, b) => a.importance - b.importance), skills);

  const primarySkills = useMemo(() => sortedSkills.filter((skill) => skill.primary), sortedSkills);
  const secondarySkills = useMemo(() => sortedSkills.filter((skill) => !skill.primary), sortedSkills);

  return (
    <div className={styles['root']}>
      <Typography variant="h2">Skills & Experience</Typography>
      <SkillsList skills={primarySkills} heading="Primary Skills" />
      <SkillsList skills={secondarySkills} heading="Also Worked With" />
      {experiences.map((experience: any) => (
        <WorkExperience experience={experience} />
      ))}
    </div>
  );
};
