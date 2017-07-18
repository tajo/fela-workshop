// Use "lodash for CSS in JS" aka
// https://polished.js.org/

import React from 'react';
import { createComponent } from 'cf-style-container';
import { shorten } from './styles.css';
import { ellipsis } from 'polished';

const Shorten = createComponent(({ theme }) => ({
  ...ellipsis('750px')
}));

export default () =>
  <article>
    <h1>8. Polished</h1>
    <div className={shorten}>
      <i>WWW is a disaster</i>
    </div>
    <p />
    <Shorten>
      <i>WWW is a disaster</i>
    </Shorten>
  </article>;
