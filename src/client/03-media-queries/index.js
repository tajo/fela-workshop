// This demonstrates usage of
// https://github.com/rofrischmann/fela/tree/master/packages/fela-plugin-named-media-query

import React from 'react';
import { createComponent } from 'cf-style-container';
import { block1, block2 } from './styles.css';

const Block1 = createComponent(() => ({
  display: 'none',
  desktop: {
    display: 'block'
  }
}));

const Block2 = createComponent(() => ({
  display: 'block',
  desktop: {
    display: 'none'
  }
}));

export default () =>
  <article>
    <h1>3. Media Queries</h1>
    <div className={block1}>This is too wide</div>
    <div className={block2}>
      This is too <strong>narrow</strong>
    </div>
    <Block1>This is too wide</Block1>
    <Block2>
      This is too <strong>narrow</strong>
    </Block2>
  </article>;
