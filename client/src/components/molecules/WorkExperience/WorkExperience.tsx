import React from 'react';
import styles from './WorkExperience.module.scss';
import type { Work } from 'types';
import { motion } from 'framer-motion';
import { Typography } from 'components/atoms/Typography';

export interface WorkExperienceProps {
  experience: Work;
}

export const WorkExperience: React.FC<WorkExperienceProps> = ({ experience }): JSX.Element => {
  return (
    <div className={styles['work-exp']}>
      <div className={styles['work-exp__year']}>
        <Typography variant="h4" weight={600}>
          {experience.year}
        </Typography>
      </div>
      <div className={styles['work-exp__details']}>
        <motion.div
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
        </motion.div>
      </div>
    </div>
  );
};
