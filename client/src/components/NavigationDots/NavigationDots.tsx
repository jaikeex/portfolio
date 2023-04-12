import React from 'react';
import './NavigationDots.styles.scss';
import { Link } from 'react-scroll';

export interface NavigationDotsProps {
  active: number;
}

export const NavigationDots: React.FC<NavigationDotsProps> = ({ active = '' }): JSX.Element => {
  return (
    <div className="app__navigation">
      {['about', 'projects', 'skills', 'contact'].map((section, index) => (
        <Link
          to={section}
          key={`nav-dot-${section}`}
          smooth={true}
          duration={10}
          className="app__navigation--dot"
          style={active === index ? { backgroundColor: '#313BAC' } : {}}
        />
      ))}
    </div>
  );
};
