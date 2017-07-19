import React from 'react';
import { createComponent } from 'cf-style-container';
import Button from './button';

const Advanced = () =>
  <article>
    <h1>13. Advanced</h1>
    <Button onClick={() => console.log('button clicked')}>Hello</Button>
  </article>;

export default Advanced;
