import React from 'react';
import styles from './IconButton.module.scss';

export interface IconButtonProps extends React.PropsWithChildren {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export const IconButton: React.FC<IconButtonProps> = ({ children = null, onClick = () => {} }): JSX.Element => {
  return (
    <button onClick={onClick} className={styles['button']}>
      {children}
    </button>
  );
};
