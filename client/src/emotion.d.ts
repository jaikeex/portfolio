/// <reference types="@emotion/react/types/css-prop" />
import '@emotion/react';
import type { Theme as MyTheme } from 'types/theme';

declare module '@emotion/react' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface Theme extends MyTheme {}
}
