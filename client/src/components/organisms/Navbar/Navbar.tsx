import React, { useCallback, useState } from 'react';
import { SocialMedia } from 'components/molecules/SocialMedia';
import { HiMenuAlt1 } from 'react-icons/hi';
import { MobileMenu } from 'components';
import * as Styled from './styles';

const sections = ['about', 'projects', 'skills', 'contact'];

export const Navbar: React.FC = (): JSX.Element => {
  const [mobileNavVisible, setMobileNavVisible] = useState<boolean>(false);

  const handleOpenMobileNav = useCallback(() => {
    setMobileNavVisible(true);
  }, [setMobileNavVisible]);

  const handleCloseMobileNav = useCallback(() => {
    setMobileNavVisible(false);
  }, [setMobileNavVisible]);

  return (
    <Styled.Root>
      <Styled.NavbarLogo />
      <Styled.Links>
        {sections.map((section) => (
          <li key={`link-${section}`}>
            <Styled.NavbarLink to={section}>{section}</Styled.NavbarLink>
          </li>
        ))}
      </Styled.Links>

      <SocialMedia />

      {/* MOBILE NAVIGATION */}
      <Styled.MobileMenuButton>
        <HiMenuAlt1 onClick={handleOpenMobileNav} />
        {mobileNavVisible ? <MobileMenu sections={sections} onclose={handleCloseMobileNav} /> : null}
      </Styled.MobileMenuButton>
    </Styled.Root>
  );
};
