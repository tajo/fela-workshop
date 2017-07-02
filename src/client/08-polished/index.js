import React from 'react';
import { createComponent } from 'cf-style-container';
import { shorten } from './styles.css';

export default () =>
  <article>
    <h1>8. Polished</h1>
    <div className={shorten}>
      <i>WWW is a disaster</i> - 06/2016 Tony Stuck, explaining our team org
      structure in layman terms
    </div>
  </article>;
