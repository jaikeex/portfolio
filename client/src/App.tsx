import React, { createRef, useEffect, useState } from 'react';
import 'App.styles.scss';
import { Navbar, Projects } from './templates';
import { NavigationDots } from 'components/molecules/NavigationDots';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from 'utils/query-client';
import { SkillsPage } from 'pages/SkillsPage/SkillsPage';
import { ThemeProvider } from 'context/ThemeContext';
import { AboutPage } from 'pages/AboutPage';
import { ContactPage } from 'pages/ContactPage';

const App = () => {
  const [activeDot, setActiveDot] = useState(0);
  const aboutRef = createRef<HTMLDivElement>();
  const projectsRef = createRef<HTMLDivElement>();
  const skillsRef = createRef<HTMLDivElement>();
  const contactRef = createRef<HTMLDivElement>();
  const sectionRefs = [aboutRef, projectsRef, skillsRef, contactRef];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = sectionRefs.findIndex((ref) => ref.current?.id === entry.target.id);
            setActiveDot(index);
          }
        });
      },
      { threshold: 0.6 }
    );

    sectionRefs.forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => {
      sectionRefs.forEach((ref) => {
        if (ref.current) observer.unobserve(ref.current);
      });
    };
  }, [sectionRefs]);

  return (
    <ThemeProvider>
      <QueryClientProvider client={queryClient}>
        <div className="app">
          <NavigationDots active={activeDot} />
          <Navbar />
          <AboutPage ref={aboutRef} />
          <Projects ref={projectsRef} />
          <SkillsPage ref={skillsRef} />
          <ContactPage ref={contactRef} />
        </div>
      </QueryClientProvider>
    </ThemeProvider>
  );
};

export default App;
