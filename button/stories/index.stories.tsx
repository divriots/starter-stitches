import React from 'react';
import { Button } from '../src';

export default {
  parameters: {
    layout: 'centered',
  },
};

export const button_primary = () => <Button>button</Button>;

export const button_secondary = () => <Button type="secondary">button</Button>;
