import { css } from '@emotion/react';
import { Theme } from 'types/theme';

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

  section {
    width: 100%;
    min-height: 100vh;
    padding: 6rem 4rem;
  }

  h1 {
    font-size: 2rem;
    font-weight: 400;
    margin-bottom: 3rem;
  }

  h3 {
    font-size: 1.25rem;
    font-weight: 600;
    margin-bottom: 0.75rem;
  }

  h4 {
    font-size: 1rem;
    font-weight: 500;
  }

  p {
    font-size: 0.913rem;
    text-align: left;
    line-height: 1.5;
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
