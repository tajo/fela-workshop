// Inspect the element and check the styles.
// https://github.com/rofrischmann/fela/tree/master/packages/fela-plugin-prefixer

import React from 'react';
import { createComponent } from 'cf-style-container';
import { boring } from './styles.css';

const BigBird = createComponent(
  () => ({
    transition: '200ms all linear',
    userSelect: 'none',
    boxSizing: 'border-box',
    display: 'flex'
  }),
  'p'
);

export default () =>
  <article>
    <h1>6. Prefixes</h1>
    <p className={boring}>Big Bird</p>
    <BigBird>Big Bird</BigBird>
  </article>;
