import facepaint from 'facepaint';

const breakpoints = [576, 768, 800, 1200];

export const mq = facepaint(breakpoints.map((bp) => `@media (max-width: ${bp}px)`));
