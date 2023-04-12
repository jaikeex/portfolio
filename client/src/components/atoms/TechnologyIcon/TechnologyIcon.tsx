import React from 'react';
import styles from './TechnologyIcon.module.scss';

export interface TechnologyIconProps {
  alt: string;
  size?: 'small' | 'standard';
  src: string;
}

export const TechnologyIcon: React.FC<TechnologyIconProps> = ({ alt, size = 'standard', src }): JSX.Element => {
  return <img src={src} alt={alt} className={styles[`icon--${size}`]} />;
};
