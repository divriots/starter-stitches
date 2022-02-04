import { styled } from '~/stitches';

export const Button = styled('button', {
  backgroundColor: '$primary',
  color: '$text_on_primary',
  borderRadius: '9999px',
  fontSize: '$3',
  padding: '$2 $4',
  border: '0',
  '&:hover': {
    backgroundColor: '$primary_light',
  },
  cursor: 'pointer',

  variants: {
    type: {
      secondary: {
        backgroundColor: '$blue500',
        color: '$text_on_primary',
        '&:hover': {
          backgroundColor: '$primary_light',
        },
        '&:focus': {
          backgroundColor: 'red',
        },
      },
    },
  },
});
