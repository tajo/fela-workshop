// This is a basic CSS syntax, not surprises here
// CSS in JS is using camelCase

import React from 'react';
import { square } from './styles.css';
import { createComponent } from 'cf-style-container';

const Square = createComponent(() => ({
  height: 100,
  width: 100,
  border: '4px solid blue',
  padding: '2rem',
  fontSize: '1.5rem',
  margin: '2rem'
}));

export default () =>
  <article>
    <h1>1. Basic Syntax</h1>
    <div className={square}>Mantis Toboggan</div>
    <Square>Mantis Toboggan</Square>
  </article>;
