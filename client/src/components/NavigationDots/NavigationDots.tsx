import React from 'react';
import './NavigationDots.styles.scss';

export interface NavigationDotsProps {
  active: string;
}

export const NavigationDots: React.FC<NavigationDotsProps> = ({ active = '' }): JSX.Element => {
  return (
    <div className="app__navigation">
      {['about', 'projects', 'skills', 'contact'].map((section, index) => (
        <a
          href={`#${section}`}
          key={`nav-dot-${section}`}
          className="app__navigation--dot"
          style={active === section ? { backgroundColor: '#313BAC' } : {}}
        />
      ))}
    </div>
  );
};
