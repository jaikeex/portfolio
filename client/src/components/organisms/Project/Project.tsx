import { urlFor } from 'utils/sanity-client';
import React, { useEffect, useRef } from 'react';
import type { ProjectData } from 'types';
import { Chip, TechnologyBadge, Typography } from 'components';
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
      {project.imgUrl ? <img src={urlFor(project.imgUrl).url()} alt={`project ${project.title}`} /> : null}
    </Styled.ProjectImg>
    <Styled.ProjectInfo>
      <Typography variant="h2" align="center" removeMargin>
        {project.title ? project.title : null}
      </Typography>

      <Divider />

      <Styled.ProjectTags>
        {project.tags ? project.tags.map((tag, index) => <Chip key={index}>{tag}</Chip>) : null}
      </Styled.ProjectTags>

      <Typography align="center" size="sm">
        {parse(project.description)}
      </Typography>

      <div style={{ flexGrow: 1 }} />

      <Styled.ProjectTechnologies>
        {project.technologies
          ? project.technologies.map((tech) => (
              <TechnologyBadge key={tech.name} name={tech.name} src={urlFor(tech.icon).url()} />
            ))
          : null}
      </Styled.ProjectTechnologies>

      <Styled.ProjectLinks>
        <Link href={project.codeLink} openInNew>
          <Button>
            <Typography variant="span" size="md">
              Source
            </Typography>
            <AiFillGithub fontSize={24} />
          </Button>
        </Link>

        <Link href={project.projectLink} openInNew>
          <Button>
            <Typography variant="span" size="md">
              Homepage
            </Typography>
            <AiFillEye fontSize={24} />
          </Button>
        </Link>
      </Styled.ProjectLinks>
    </Styled.ProjectInfo>
  </Styled.Root>
);
