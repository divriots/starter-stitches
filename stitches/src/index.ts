import { colors } from '~/colors';
import { space } from '~/spaces';
import {
  fonts,
  fontSizes,
  fontWeights,
  lineHeights,
  letterSpacings,
} from '~/typography';
import { sizes } from '~/sizes';
import { borderWidths, borderStyles } from '~/borders';
import { radii } from '~/radii';
import { shadows } from '~/shadows';
import { zIndices } from '~/zIndices';
import { transitions } from '~/transitions';

import { createStitches } from '@stitches/react';

export const theme = {
  colors,
  space,
  fonts,
  fontSizes,
  fontWeights,
  lineHeights,
  letterSpacings,
  sizes,
  borderWidths,
  borderStyles,
  radii,
  shadows,
  zIndices,
  transitions,
};

export const { styled, css } = createStitches({
  theme,
});
