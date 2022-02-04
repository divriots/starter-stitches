import React from 'react';
import { Button } from '../src';
import {
  getByLabelText,
  getByText,
  getByTestId,
  queryByTestId,
  waitFor,
  fireEvent,
  screen,
} from '@testing-library/dom';

export default {
  parameters: {
    layout: 'centered',
  },
};

export const button_primary = () => <Button>button</Button>;

export const button_secondary = () => <Button type="secondary">button</Button>;
button_secondary.play = () => {
  const a = screen.getByText('button');
  setTimeout(() => {
    fireEvent.mouseOver(a);
  }, 1000);
};
