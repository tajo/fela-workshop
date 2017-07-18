// Fallback support
// https://github.com/rofrischmann/fela/tree/master/packages/fela-plugin-fallback-value

import React from 'react';
import { createComponent } from 'cf-style-container';
import { colorz } from './styles.css';

const Colorz = createComponent(() => ({
  color: ['#ccc', 'rgba(0, 0, 0, 0.5)']
}));

export default () =>
  <article>
    <h1>7. Fallbacks</h1>
    <p className={colorz}>Colorzzzzzzz</p>
    <Colorz>Colorzzzzzzz</Colorz>
  </article>;
