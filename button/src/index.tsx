import { styled } from '~/stitches';

export const Button = styled('button', {
  backgroundColor: '$primary',
  color: '$text_on_primary',
  borderRadius: '9999px',
  fontSize: '$2',
  padding: '0 $4',
  height: '30px',
  border: '0',
  '&:not([disabled]):hover': {
    backgroundColor: '$primary_light',
  },
  cursor: 'pointer',

  '&[disabled]': {
    opacity: 0.6,
    cursor: 'inherit',
  },

  variants: {
    type: {
      secondary: {
        backgroundColor: '$secondary',
        color: '$text_on_secondary',
        '&:not([disabled]):hover': {
          backgroundColor: '$secondary_light',
        },
      },
    },
    size: {
      small: {
        fontSize: '$1',
        height: '20px',
        padding: '0 $3',
      },
      large: {
        fontSize: '$3',
        height: '40px',
        padding: '0 $5',
      },
    },
  },
});
