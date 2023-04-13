import { SanityImageSource } from '@sanity/image-url/lib/types/types';

export interface About {
  introduction: string[];
  highlights: Highlight[];
}

export interface Highlight {
  title: string;
  description: string;
  imgUrl: SanityImageSource;
  importance: number;
}
