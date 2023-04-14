import React from 'react';
import styles from './SocialMedia.module.scss';
import { Link } from 'components/atoms/Link';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import * as Styled from './styles';

export interface SocialMediaProps {}

export const SocialMedia: React.FC<SocialMediaProps> = ({}): JSX.Element => (
    <Styled.Root>
      <Link href="https://www.linkedin.com/in/jakub-hrubý-a4107b204/">
        <FaLinkedin fontSize={20} />
      </Link>
      <Link href="https://github.com/jaikeex">
        <FaGithub fontSize={20} />
      </Link>
    </Styled.Root>
  );
