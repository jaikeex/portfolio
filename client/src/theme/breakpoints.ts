import facepaint from 'facepaint';

const breakpoints = [480, 800, 1200, 2000];

export const mq = facepaint(breakpoints.map((bp) => `@media (max-width: ${bp}px)`));

const breakpointsMax = [2000, 1200, 800, 480];

export const mqMax = facepaint(breakpointsMax.map((bp) => `@media (max-width: ${bp}px)`));

const bp = [425, 768, 1366, 1920];

export const mqMin = facepaint(bp.map((bp) => `@media (min-width: ${bp}px)`));
