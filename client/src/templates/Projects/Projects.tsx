import React, { forwardRef, useEffect, useState } from 'react';
import './Projects.styles.scss';
import { FaGithub, FaEye } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { withNavigationDots } from 'wrapper/withNavigationDots/withNavigationDots';
import { urlFor, client } from 'client';

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

  useEffect(() => {
    console.log(ref);
  }, [ref]);

  return (
    <div ref={ref} id="projects" className="app__section">
      <div className="app__section__component">
        <h2>My projects</h2>
        <div className="app__work-filter">
          {['All', 'Application', 'Library'].map((category, index) => (
            <div
              key={category}
              className={`app__work-filter-item app__flex p-text ${
                activeFilter === category ? 'app__work-filter-item-active' : ''
              }`}
              onClick={() => handleProjectsFilter(category)}
            >
              {category}
            </div>
          ))}
        </div>
        <motion.div
          animate={animateCard}
          transition={{ duration: 0.25, delayChildren: 0.25 }}
          className="app__work-portfolio"
        >
          {filteredProjects.map((project) => (
            <div className="app__work-item app__flex">
              <div className="app__work-img app__flex">
                <img src={urlFor(project.imgUrl).url()} alt={`project ${project.title}`} />
                <motion.div
                  whileHover={{ opacity: [0, 1] }}
                  transition={{ duration: 0.15, ease: 'easeOut', staggerChildren: 0.15 }}
                  className="app__work-hover app__flex"
                >
                  <a href={project.projectLink} target="_blank" rel="noreferrer">
                    <motion.div
                      whileInView={{ scale: [0, 1] }}
                      whileHover={{ scale: [1, 0.95] }}
                      transition={{ duration: 0.25 }}
                      className="app__flex"
                    >
                      <FaEye />
                    </motion.div>
                  </a>
                  <a href={project.codeLink} target="_blank" rel="noreferrer">
                    <motion.div
                      whileInView={{ scale: [0, 1] }}
                      whileHover={{ scale: [1, 0.95] }}
                      transition={{ duration: 0.25 }}
                      className="app__flex"
                    >
                      <FaGithub />
                    </motion.div>
                  </a>
                </motion.div>
              </div>

              <div className="app__work-content app__flex">
                <h4 className="bold-text">{project.title}</h4>
                <p className="p-text" style={{ marginTop: 10 }}>
                  {project.description}
                </p>
                <div className="app__work-tag app__flex">
                  <p className="p-text">{project.tags[0]}</p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
});
