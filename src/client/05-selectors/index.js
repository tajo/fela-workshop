import React from 'react';
import { createComponent } from 'cf-style-container';
import { header, btn } from './styles.css';

export default () =>
  <article>
    <h1>5. Selectors</h1>
    <div className={header}>Schwifty</div>
    <p>
      <button className={btn}>
        Button 1 <span>BIG</span>
      </button>
      <button className={btn}>Button 2</button>
    </p>
  </article>;
