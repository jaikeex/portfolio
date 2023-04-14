import React, { createRef, useEffect, useState } from 'react';
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
  const aboutRef = createRef<HTMLDivElement>();
  const projectsRef = createRef<HTMLDivElement>();
  const skillsRef = createRef<HTMLDivElement>();
  const contactRef = createRef<HTMLDivElement>();

  const sectionRefs = [aboutRef, projectsRef, skillsRef, contactRef];

  const { activeDot } = useNavigationDots(sectionRefs);

  return (
    <ThemeProvider>
      <QueryClientProvider client={queryClient}>
        <NavigationDots active={activeDot} />
        <Navbar />
        <AboutPage ref={aboutRef} />
        <ProjectsPage ref={projectsRef} />
        <SkillsPage ref={skillsRef} />
        <ContactPage ref={contactRef} />
      </QueryClientProvider>
    </ThemeProvider>
  );
};

export default App;
