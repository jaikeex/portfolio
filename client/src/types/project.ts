import type { SanityImageSource } from '@sanity/image-url/lib/types/types';

export interface ProjectData {
  title: string;
  description: string;
  projectLink: string;
  codeLink: string;
  imgUrl: SanityImageSource;
  importance: number;
  technologies: ProjectTechnology[];
  tags: string[];
}

export interface ProjectTechnology {
  name: string;
  icon: SanityImageSource;
}
