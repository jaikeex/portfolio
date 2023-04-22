import React from 'react';
import { motion } from 'framer-motion';
import * as Styled from './styles';
import { Typography, TechnologyIcon } from 'components/atoms';

export type SkillBadgeProps = {
  alt?: string;
  bgColor?: string;
  label?: string;
  src?: string;
};

export const SkillBadge: React.FC<SkillBadgeProps> = ({
  alt = '',
  bgColor = '',
  label = '',
  src = ''
}): JSX.Element => (
  <motion.div whileInView={{ opacity: [0, 1] }} transition={{ duration: 0.35 }} style={{ textAlign: 'center' }}>
    <Styled.Img bgColor={bgColor}>
      <TechnologyIcon src={src} alt={alt} />
    </Styled.Img>
    {label ? (
      <Typography variant="span" size="sm">
        {label}
      </Typography>
    ) : null}
  </motion.div>
);
