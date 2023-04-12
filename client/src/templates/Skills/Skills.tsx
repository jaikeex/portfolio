import React, { forwardRef, useEffect, useState } from 'react';
import './Skills.styles.scss';
import { FaGithub, FaEye } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { withNavigationDots } from 'wrapper/withNavigationDots/withNavigationDots';
import { urlFor, client } from 'client';
import ReactTooltip from 'react-tooltip';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { fetchSanityData } from 'utils/fetch-sanity-data';
import { useSanityData } from 'hooks/useSanityData';
import { SkillsList } from 'components';
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
              <motion.div className="app__skills-exp-item" key={experience.year}>
                <div className="app__skills-exp-year">
                  <p className="bold-text">{experience.year}</p>
                </div>
                <motion.div className="app__skills-exp-works">
                  {experience.works.map((work: any) => (
                    <>
                      <motion.div
                        whileInView={{ opacity: [0, 1] }}
                        transition={{ duration: 0.5 }}
                        className="app__skills-exp-work"
                        data-tip
                        data-for={work.name}
                        key={work.name}
                      >
                        <h4 className="bold-text">{work.name}</h4>
                        <p className="p-text">{work.company}</p>
                        <p className="p-text">{work.desc}</p>
                      </motion.div>
                    </>
                  ))}
                </motion.div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
});
