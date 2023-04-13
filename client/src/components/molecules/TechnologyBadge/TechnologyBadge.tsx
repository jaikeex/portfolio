import React from 'react';
import { motion } from 'framer-motion';
import { usePopperTooltip } from 'react-popper-tooltip';
import { TechnologyIcon } from 'components/atoms/TechnologyIcon';
import * as Styled from './styles';

export interface TechnologyBadgeProps {
  name: string;
  src: string;
}

export const TechnologyBadge: React.FC<TechnologyBadgeProps> = ({ name, src }): JSX.Element => {
  const { getTooltipProps, setTooltipRef, setTriggerRef, visible } = usePopperTooltip({ placement: 'top' });

  return (
    <motion.div whileInView={{ opacity: [0, 1] }} transition={{ duration: 0.35 }}>
      <TechnologyIcon ref={setTriggerRef} src={src} alt={name} size="small" />
      {visible && (
        <Styled.Tooltip ref={setTooltipRef} {...getTooltipProps()} variant="span">
          {name}
        </Styled.Tooltip>
      )}
    </motion.div>
  );
};
