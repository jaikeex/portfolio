import { urlFor } from 'client';
import React from 'react';
import styles from './Project.module.scss';
import type { ProjectData } from 'types';
import { SkillsList, TechnologyBadge, Typography } from 'components';
import { usePopperTooltip } from 'react-popper-tooltip';
import { Link } from 'components/atoms/Link';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

export interface ProjectProps {
  project: ProjectData;
}

export const Project: React.FC<ProjectProps> = ({ project }): JSX.Element => {
  return (
    <div className={styles['project']}>
      <div className={styles['project__image']}>
        <img src={urlFor(project.imgUrl).url()} alt={`project ${project.title}`} />
      </div>
      <div>
        <div className={styles['project__meta']}>
          <Typography variant="h3">{project.title}</Typography>
          {project.technologies.map((tech) => (
            <TechnologyBadge name={tech.name} src={urlFor(tech.icon).url()} />
          ))}
        </div>
        <div className={styles['project__links']}>
          <Link href={project.projectLink} className={styles['project__link']}>
            <Typography variant="span" size="md">
              Homepage
            </Typography>
            <FaExternalLinkAlt fontSize={12} />
          </Link>
          <Link href={project.codeLink} className={styles['project__link']}>
            <Typography variant="span" size="md">
              Source
            </Typography>
            <FaGithub fontSize={14} />
          </Link>
        </div>
        <div className={styles['project__description']}>{project.description}</div>
      </div>
    </div>
  );
};
