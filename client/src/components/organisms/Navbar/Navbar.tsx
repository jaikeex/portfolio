import { Logo } from 'components/atoms/Logo';
import { SocialMedia } from 'components/molecules/SocialMedia';
import React, { useState } from 'react';
import { HiMenuAlt1 } from 'react-icons/hi';
import { MobileMenu } from '../MobileMenu';
import * as Styled from './styles';

const sections = ['about', 'projects', 'skills', 'contact'];

export const Navbar: React.FC = (): JSX.Element => {
  const [mobileNavVisible, setMobileNavVisible] = useState<boolean>(false);

  const handleOpenMobileNav = () => {
    setMobileNavVisible(true);
  };

  const handleCloseMobileNav = () => {
    setMobileNavVisible(false);
  };
  return (
    <Styled.Root>
      <Logo />
      <Styled.Links>
        {sections.map((section) => (
          <li key={`link-${section}`}>
            <Styled.NavbarLink href={`#${section}`}>{section}</Styled.NavbarLink>
          </li>
        ))}
      </Styled.Links>

      <SocialMedia />

      {/* MOBILE NAVIGATION */}
      <Styled.MobileMenuButton>
        <HiMenuAlt1 onClick={handleOpenMobileNav} />
        {mobileNavVisible && <MobileMenu sections={sections} onclose={handleCloseMobileNav} />}
      </Styled.MobileMenuButton>
    </Styled.Root>
  );
};
