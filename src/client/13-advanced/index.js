import React from 'react';
import { createComponent } from 'cf-style-container';
import Button from './Button';

const Advanced = () =>
  <article>
    <h1>13. Advanced</h1>
    <Button onClick={() => console.log('button clicked')}>Hello</Button>
  </article>;

export default Advanced;
