import React, { useEffect } from 'react';
import { HiX } from 'react-icons/hi';
import * as Styled from './styles';

export interface MobileMenuProps {
  onclose?: () => void;
  onOpen?: () => void;
  sections: string[];
}

export const MobileMenu: React.FC<MobileMenuProps> = ({
  onOpen = () => {},
  onclose = () => {},
  sections
}): JSX.Element => {
  useEffect(() => {
    onOpen();
  }, []);

  return (
    <Styled.Root>
      <HiX onClick={onclose} />
      <Styled.Links>
        {sections.map((section) => (
          <li key={section}>
            <Styled.MobileNavLink href={`#${section}`} onClick={onclose}>
              {section}
            </Styled.MobileNavLink>
          </li>
        ))}
      </Styled.Links>
    </Styled.Root>
  );
};
