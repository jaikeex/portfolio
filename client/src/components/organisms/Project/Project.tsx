import { urlFor } from 'client';
import React from 'react';
import styles from './Project.module.scss';
import type { ProjectData } from 'types';
import { TechnologyBadge, Typography } from 'components';
import { Link } from 'components/atoms/Link';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import { Button } from 'components/atoms/Button';
import { Divider } from 'components/atoms/Divider';

export interface ProjectProps {
  project: ProjectData;
}

export const Project: React.FC<ProjectProps> = ({ project }): JSX.Element => {
  return (
    <div className={styles['project']}>
      <div className={styles['project__image']}>
        <img src={urlFor(project.imgUrl).url()} alt={`project ${project.title}`} />
      </div>
      <div className={styles['project__info']}>
        <Typography variant="h2" className={styles['project__title']}>
          {project.title}
        </Typography>
        <Divider />
        <Typography className={styles['project__description']}>{project.description}</Typography>
        <div className={styles['project__technologies']}>
          {project.technologies.map((tech) => (
            <TechnologyBadge name={tech.name} src={urlFor(tech.icon).url()} />
          ))}
        </div>
        <div className={styles['project__links']}>
          <Link href={project.projectLink} className={styles['project__link']}>
            <Button>
              <Typography variant="span" size="md" className={styles['project__link__text']}>
                Homepage
              </Typography>
              <AiFillEye fontSize={24} />
            </Button>
          </Link>

          <Link href={project.codeLink} className={styles['project__link']}>
            <Button>
              <Typography variant="span" size="md" className={styles['project__link__text']}>
                Source
              </Typography>
              <AiFillGithub fontSize={24} />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
