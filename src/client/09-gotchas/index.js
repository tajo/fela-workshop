import React from 'react';
import { createComponent } from 'cf-style-container';
import { box, loading } from './styles.css';

export default () =>
  <article>
    <h1>9. Gotchas</h1>
    <div className={box}>Some box</div>
    <button className={loading}>Button</button>
  </article>;
