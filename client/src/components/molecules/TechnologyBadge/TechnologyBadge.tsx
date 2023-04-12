import React from 'react';
import styles from './TechnologyBadge.module.scss';
import { motion } from 'framer-motion';
import { usePopperTooltip } from 'react-popper-tooltip';
import { TechnologyIcon } from 'components/atoms/TechnologyIcon';
import { Typography } from 'components/atoms';

export interface TechnologyBadgeProps {
  name: string;
  src: string;
}

export const TechnologyBadge: React.FC<TechnologyBadgeProps> = ({ name, src }): JSX.Element => {
  const { getTooltipProps, setTooltipRef, setTriggerRef, visible } = usePopperTooltip({ placement: 'top' });

  return (
    <motion.div whileInView={{ opacity: [0, 1] }} transition={{ duration: 0.35 }} className={styles['technology']}>
      <div className={styles['technology__image']} ref={setTriggerRef}>
        <TechnologyIcon src={src} alt={name} size="small" />
      </div>
      {visible && (
        <Typography ref={setTooltipRef} variant="span" {...getTooltipProps()} className={styles['technology__label']}>
          {name}
        </Typography>
      )}
    </motion.div>
  );
};
