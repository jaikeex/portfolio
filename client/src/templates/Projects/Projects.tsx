import React, { forwardRef, useEffect, useState } from 'react';
import './Projects.styles.scss';
import { FaGithub, FaEye } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { withNavigationDots } from 'wrapper/withNavigationDots/withNavigationDots';
import { urlFor, client } from 'client';
import { Project } from 'components';

export interface ProjectsProps {}

export const Projects = forwardRef<HTMLDivElement, ProjectsProps>(({}, ref): JSX.Element => {
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [animateCard, setAnimateCard] = useState<{ y: number; opacity: number }>({ y: 0, opacity: 1 });
  const [projects, setProjects] = useState<any[]>([]);
  const [filteredProjects, setFilteredProjects] = useState<any[]>([]);

  const handleProjectsFilter = (item: string) => {
    setActiveFilter(item);
    setAnimateCard({ y: 100, opacity: 0 });

    setTimeout(() => {
      setAnimateCard({ y: 0, opacity: 1 });

      if (item === 'All') {
        setFilteredProjects(projects);
      } else {
        setFilteredProjects(projects.filter((project) => project.tags.includes(item)));
      }
    }, 500);
  };

  useEffect(() => {
    const loadData = async () => {
      const query = '*[_type=="projects"]';
      const response = await client.fetch(query);
      setProjects(response);
      setFilteredProjects(response);
    };

    loadData();
  }, []);

  return (
    <div ref={ref} id="projects" className="app__section">
      <div className="app__section__component">
        <h2>My projects</h2>
        <motion.div
          animate={animateCard}
          transition={{ duration: 0.25, delayChildren: 0.25 }}
          className="app__work-portfolio"
        >
          {projects.map((project) => (
            <Project project={project} />
          ))}
        </motion.div>
      </div>
    </div>
  );
});
