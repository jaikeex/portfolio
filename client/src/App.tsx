import React, { createRef, useEffect, useRef, useState } from 'react';
import 'App.styles.scss';
import { About, Footer, Header, Navbar, Projects } from './templates';
import { NavigationDots } from 'components/NavigationDots';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from 'utils/query-client';
import { SkillsPage } from 'pages/SkillsPage/SkillsPage';

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
    <div className="theme-light">
      <QueryClientProvider client={queryClient}>
        <NavigationDots active={activeDot} />
        <Navbar />
        <About ref={aboutRef} />
        <Projects ref={projectsRef} />
        <SkillsPage ref={skillsRef} />
        <Footer ref={contactRef} />
      </QueryClientProvider>
    </div>
  );
};

export default App;
