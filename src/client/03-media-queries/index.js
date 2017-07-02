import React from 'react';
import { createComponent } from 'cf-style-container';
import { block1, block2 } from './styles.css';

export default () =>
  <article>
    <h1>3. Media Queries</h1>
    <div className={block1}>This is too wide</div>
    <div className={block2}>
      This is too <strong>narrow</strong>
    </div>
  </article>;
