import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export interface SocialMediaProps {}

export const SocialMedia: React.FC<SocialMediaProps> = ({}): JSX.Element => {
  return (
    <div>
      <div>
        <FaLinkedin />
      </div>
      <div>
        <FaGithub />
      </div>
    </div>
  );
};
