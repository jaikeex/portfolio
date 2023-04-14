import type { SanityImageSource } from '@sanity/image-url/lib/types/types';

export interface Skill {
  name: string;
  bgColor: string;
  icon: SanityImageSource;
  primary: boolean;
  importance: number;
}
