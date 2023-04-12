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
  const primarySkills = useMemo(() => skills.filter((skill) => skill.primary), skills);
  const secondarySkills = useMemo(() => skills.filter((skill) => !skill.primary), skills);

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
