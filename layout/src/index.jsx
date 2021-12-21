import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import { CoreLayout } from '@divriots/dockit-react/mdx-layout-core';
import Logo from './stitches.svg';

export const MdxLayout = ({ components = {}, onSwitch, ...rest }) => (
  <MDXProvider components={{ ...components }}>
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/water.css@2/out/water.css"
    />
    <CoreLayout logo={<img src={Logo} width="40px" />} {...rest} />
  </MDXProvider>
);
