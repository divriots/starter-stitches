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
import React from 'react';
import ReactDOM from 'react-dom';
import { button_secondary } from '../stories/index.stories';

export default {
  parameters: {
    layout: 'centered',
  },
};

describe('Dummy test', function () {
  it('should be always true', function () {
    ReactDOM.render(button_secondary(), document.body);
    const a = screen.getByText('button');
    console.log(
      window.getComputedStyle(a).getPropertyValue('background-color')
    );
    a.focus();

    console.log(
      window.getComputedStyle(a).getPropertyValue('background-color')
    );
  });
});
