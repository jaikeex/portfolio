import React, { createRef, useEffect, useRef, useState } from 'react';
import { NavigationDots } from 'components/molecules/NavigationDots';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from 'utils/query-client';
import { SkillsPage } from 'pages/SkillsPage/SkillsPage';
import { ThemeProvider } from 'context/ThemeContext';
import { AboutPage } from 'pages/AboutPage';
import { ContactPage } from 'pages/ContactPage';
import { ProjectsPage } from 'pages/ProjectsPage';
import { useNavigationDots } from 'hooks/useNavigationDots';
import { Navbar } from 'components';

const App = () => {
  const aboutRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const sectionRefs = [aboutRef, projectsRef, skillsRef, contactRef];

  const { activeDot } = useNavigationDots(sectionRefs);

  return (
    <ThemeProvider>
      <QueryClientProvider client={queryClient}>
        <Navbar />
        <NavigationDots active={activeDot} />
        <AboutPage ref={aboutRef} />
        <ProjectsPage ref={projectsRef} />
        <SkillsPage ref={skillsRef} />
        <ContactPage ref={contactRef} />
      </QueryClientProvider>
    </ThemeProvider>
  );
};

export default App;
