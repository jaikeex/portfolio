import type { SanityImageSource } from '@sanity/image-url/lib/types/types';

export interface ProjectData {
  title: string;
  description: string;
  projectLink: string;
  codeLink: string;
  imgUrl: SanityImageSource;
  technologies: ProjectTechnology[];
}

export interface ProjectTechnology {
  name: string;
  icon: SanityImageSource;
}
