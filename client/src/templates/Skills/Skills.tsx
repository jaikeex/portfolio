import React, { forwardRef, useState } from 'react';
import './Skills.styles.scss';
import { useSanityData } from 'hooks/useSanityData';
import { SkillsList, WorkExperience } from 'components';
import { Typography } from 'components/atoms/Typography';

export interface SkillsProps {}

export const Skills = forwardRef<HTMLDivElement, SkillsProps>(({}, ref): JSX.Element => {
  const { status, data, error, isFetching } = useSanityData('skills');
  const { status: expStatus, data: expData } = useSanityData('experiences');

  const [experiences, setExperiences] = useState<any[]>([]);

  return (
    <div id="skills" ref={ref} className="app__section">
      <div className="app__section__component">
        <Typography variant="h2">Skills & Experience</Typography>
        <div>{status === 'success' && <SkillsList skills={data} heading="Primary Skills" />}</div>
        {expStatus === 'success' && (
          <div className="app__skills-exp">
            {expData.map((experience: any) => (
              <WorkExperience experience={experience} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
});
