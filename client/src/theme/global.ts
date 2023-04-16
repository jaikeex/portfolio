import { css } from '@emotion/react';
import type { Theme } from 'types/theme';
import { device } from './breakpoints';

const globalStyles = (theme: Theme) => css`
  *,
  ::after,
  ::before {
    box-sizing: inherit;
    margin: 0;
    padding: 0;
    scroll-behavior: smooth;
  }

  body {
    background-color: ${theme.colors.backgroundPrimary};
    box-sizing: border-box;
    width: 100%;
  }

  h1 {
    font-size: ${theme.typography.h1.fontSize};
    font-weight: ${theme.typography.h1.fontWeight};
    margin-bottom: ${theme.typography.h1.marginBottom};
  }

  h2 {
    font-size: ${theme.typography.h2.fontSize};
    font-weight: ${theme.typography.h2.fontWeight};
    margin-bottom: ${theme.typography.h2.marginBottom};
  }

  h3 {
    font-size: ${theme.typography.h3.fontSize};
    font-weight: ${theme.typography.h3.fontWeight};
    margin-bottom: ${theme.typography.h3.marginBottom};
  }

  h4 {
    font-size: ${theme.typography.h4.fontSize};
    font-weight: ${theme.typography.h4.fontWeight};
    margin-bottom: ${theme.typography.h4.marginBottom};
  }

  p {
    font-size: ${theme.typography.p.fontSize};
    line-height: ${theme.typography.p.lineHeight};
    ${device.xl} {
      font-size: 1.125rem;
    }
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  span,
  a {
    font-family: 'Open Sans', system-ui, Avenir, Helvetica, Arial, sans-serif;
    color: ${theme.colors.textPrimary};
  }
`;

export default globalStyles;
