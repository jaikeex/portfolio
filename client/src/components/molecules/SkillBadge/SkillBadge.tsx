import React from 'react';
import { motion } from 'framer-motion';
import { TechnologyIcon } from 'components/atoms/TechnologyIcon';
import * as Styled from './styles';
import { Typography } from 'components/atoms';

export interface SkillBadgeProps {
  alt?: string;
  bgColor?: string;
  label?: string;
  size?: 'small' | 'standard';
  src?: string;
}

export const SkillBadge: React.FC<SkillBadgeProps> = ({
  alt = '',
  bgColor = '',
  label = '',
  size = 'standard',
  src = ''
}): JSX.Element => (
    <motion.div whileInView={{ opacity: [0, 1] }} transition={{ duration: 0.35 }} style={{ textAlign: 'center' }}>
      <Styled.Img style={bgColor ? { backgroundColor: bgColor } : {}}>
        <TechnologyIcon src={src} alt={alt} />
      </Styled.Img>
      {label && (
        <Typography variant="span" size="sm">
          {label}
        </Typography>
      )}
    </motion.div>
  );
