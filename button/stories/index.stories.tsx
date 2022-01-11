import React from 'react';
import { Button } from '../src';

export default {
  parameters: {
    layout: 'centered',
  },
};

export const button_primary = () => (
  <>
    <Button size="small">button</Button>
    <Button>button</Button>
    <Button size="large">button</Button>
  </>
);

export const button_secondary = () => (
  <>
    <Button type="secondary" size="small">
      button
    </Button>
    <Button type="secondary">button</Button>
    <Button type="secondary" size="large">
      button
    </Button>
  </>
);

export const button_disable = () => (
  <>
    <Button disabled>Primary</Button>
    <Button disabled type="secondary">
      Secondary
    </Button>
  </>
);
