import { colors } from '~/colors';
import { createStitches } from '@stitches/react';

export const theme = {
  colors,
  space: {
    1: '5px',
    2: '10px',
    3: '15px',
    4: '20px',
  },
  fontSizes: {
    1: '0.75rem',
    2: '1rem',
    3: '1.5rem',
  },
  fonts: {
    headings: 'Untitled Sans, apple-system, sans-serif',
    body: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
    mono: 'Söhne Mono, menlo, monospace',
  },
  fontWeights: {
    light: 300,
    normal: 400,
    semibold: 500,
    bold: 600,
  },
  lineHeights: {
    condensedUltra: 1,
    condensed: 1.25,
    default: 1.5,
  },
  letterSpacings: { tight: '0.01rem', loose: '0.2rem' },
  sizes: {
    small: '544px',
    medium: '768px',
    large: '1012px',
    xlarge: '1280px',
  },
  borderWidths: {},
  borderStyles: {},
  radii: {},
  shadows: {
    small: '0 1px 0 rgba(149, 157, 165, 0.1)',
    medium: '0 3px 6px rgba(149, 157, 165, 0.15)',
    large: '0 8px 24px rgba(149, 157, 165, 0.2)',
    'extra-large': '0 12px 48px rgba(149, 157, 165, 0.3)',
  },
  zIndices: { beneath: -1, normal: 'auto', onTop: 10 },
  transitions: {},
};

export const { styled, css } = createStitches({
  theme,
});
