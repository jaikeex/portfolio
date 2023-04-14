import type { SanityImageSource } from '@sanity/image-url/lib/types/types';

export interface AboutData {
  introduction: string[];
  highlights: HighlightData[];
}

export interface HighlightData {
  title: string;
  description: string;
  imgUrl: SanityImageSource;
  importance: number;
}
