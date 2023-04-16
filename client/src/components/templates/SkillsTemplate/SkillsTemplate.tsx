import React, { useMemo } from 'react';
import { SkillsList, WorkExperience } from 'components';
import { Typography } from 'components/atoms/Typography';
import type { SkillData, WorkData } from 'types';

type SkillsTemplateProps = {
  skills: SkillData[];
  experiences: WorkData[];
};

export const SkillsTemplate: React.FC<SkillsTemplateProps> = ({ skills, experiences }): JSX.Element => {
  const sortedSkills = useMemo(() => skills.sort((a, b) => a.importance - b.importance), [skills]);

  const primarySkills = useMemo(() => sortedSkills.filter((skill) => skill.primary), [sortedSkills]);
  const secondarySkills = useMemo(() => sortedSkills.filter((skill) => !skill.primary), [sortedSkills]);

  return (
    <React.Fragment>
      <Typography variant="h1" align="center">
        Skills & Experience
      </Typography>
      <SkillsList skills={primarySkills} heading="Primary Skills" />
      <SkillsList skills={secondarySkills} heading="Also Worked With" />
      <Typography variant="h3" align="center">
        Professional Experience
      </Typography>
      {experiences.map((experience: WorkData, index) => (
        <WorkExperience key={index} experience={experience} />
      ))}
    </React.Fragment>
  );
};
