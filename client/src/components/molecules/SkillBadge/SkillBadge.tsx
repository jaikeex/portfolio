import React from 'react';
import styles from './SkillBadge.module.scss';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import { TechnologyIcon } from 'components/atoms/TechnologyIcon';

export interface SkillBadgeProps {
  alt?: string;
  bgColor?: string;
  label?: string;
  size?: 'small' | 'standard';
  src: string;
}

export const SkillBadge: React.FC<SkillBadgeProps> = ({
  alt = '',
  bgColor = '',
  label = '',
  size = 'standard',
  src = ''
}): JSX.Element => {
  return (
    <motion.div whileInView={{ opacity: [0, 1] }} transition={{ duration: 0.35 }} className={styles['skill']}>
      <div
        className={clsx(styles['skill__image'], styles[`skill__image--${size}`])}
        style={bgColor ? { backgroundColor: bgColor } : {}}
      >
        <TechnologyIcon src={src} alt={alt} />
      </div>
      {label && <span className={styles['skill__label']}>{label}</span>}
    </motion.div>
  );
};
