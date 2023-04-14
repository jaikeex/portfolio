import { urlFor } from 'utils/sanity-client';
import React from 'react';
import type { ProjectData } from 'types';
import { TechnologyBadge, Typography } from 'components';
import { Link } from 'components/atoms/Link';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import { Button } from 'components/atoms/Button';
import { Divider } from 'components/atoms/Divider';
import parse from 'html-react-parser';
import * as Styled from './styles';

type ProjectProps = {
  project: ProjectData;
};

export const Project: React.FC<ProjectProps> = ({ project }): JSX.Element => (
  <Styled.Root>
    <Styled.ProjectImg>
      <img src={urlFor(project.imgUrl).url()} alt={`project ${project.title}`} />
    </Styled.ProjectImg>
    <Styled.ProjectInfo>
      <Typography variant="h2" align="center" removeMargin>
        {project.title}
      </Typography>

      <Divider />

      <Typography align="center">{parse(project.description)}</Typography>

      <Styled.ProjectTechnologies>
        {project.technologies.map((tech) => (
          <TechnologyBadge key={tech.name} name={tech.name} src={urlFor(tech.icon).url()} />
        ))}
      </Styled.ProjectTechnologies>

      <Styled.ProjectLinks>
        <Link href={project.projectLink} openInNew>
          <Button>
            <Typography variant="span" size="md">
              Homepage
            </Typography>
            <AiFillEye fontSize={24} />
          </Button>
        </Link>

        <Link href={project.codeLink} openInNew>
          <Button>
            <Typography variant="span" size="md">
              Source
            </Typography>
            <AiFillGithub fontSize={24} />
          </Button>
        </Link>
      </Styled.ProjectLinks>
    </Styled.ProjectInfo>
  </Styled.Root>
);
