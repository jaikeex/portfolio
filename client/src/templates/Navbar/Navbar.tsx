import React, { useState } from 'react';
import './Navbar.styles.scss';
import { images } from 'assets';
import { HiMenuAlt1, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';
import { IconButton } from 'components/atoms/IconButton';
import { MdDarkMode } from 'react-icons/md';
import { SocialMedia } from 'components/molecules/SocialMedia';

export interface NavbarProps {}

export const Navbar: React.FC<NavbarProps> = ({}): JSX.Element => {
  const [mobileNavVisible, setMobileNavVisible] = useState<boolean>(false);

  const handleOpenMobileNav = () => {
    setMobileNavVisible(true);
  };

  const handleCloseMobileNav = () => {
    setMobileNavVisible(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <img src={images.logo} alt="logo" className="navbar__logo--image" />
      </div>
      <ul className="navbar__links">
        {['about', 'projects', 'skills', 'contact'].map((section) => (
          <li key={`link-${section}`}>
            <a href={`#${section}`}>{section}</a>
          </li>
        ))}
      </ul>
      <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
        <SocialMedia />
      </div>
      {/* MOBILE NAVIGATION */}
      <div className="navbar-menu">
        <HiMenuAlt1 onClick={handleOpenMobileNav} />
        {mobileNavVisible && (
          <motion.div whileInView={{ x: [300, 0] }} transition={{ duration: 0.25, ease: 'easeOut' }}>
            <HiX onClick={handleCloseMobileNav} />
            <ul>
              {['about', 'projects', 'skills', 'contact'].map((section) => (
                <li key={section}>
                  <a href={`#${section}`} onClick={handleCloseMobileNav}>
                    {section}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};
