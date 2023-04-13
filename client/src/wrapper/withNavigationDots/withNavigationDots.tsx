import React from 'react';
import './withNavigationDots.styles.scss';
import { NavigationDots } from 'components/molecules/NavigationDots/NavigationDots';

export interface WithNavigationDotsProps {
  className?: string;
  id: string;
}

export const withNavigationDots = <T extends JSX.IntrinsicAttributes>(
  Component: React.ComponentType<T>,
  { id, className }: WithNavigationDotsProps
) => {
  return (props: T) => (
    <div id={id} className={`wrapper ${className}`}>
      <div className="wrapper__component">
        <Component {...props} />
      </div>
    </div>
  );
};
