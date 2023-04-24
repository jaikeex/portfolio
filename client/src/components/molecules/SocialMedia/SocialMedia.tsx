import React from 'react';
import { Link } from 'components/atoms';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import * as Styled from './styles';

export const SocialMedia: React.FC = (): JSX.Element => (
  <Styled.Root>
    <Link href="https://www.linkedin.com/in/kubahruby" openInNew>
      <FaLinkedin fontSize={20} />
    </Link>
    <Link href="https://github.com/jaikeex" openInNew>
      <FaGithub fontSize={20} />
    </Link>
  </Styled.Root>
);
