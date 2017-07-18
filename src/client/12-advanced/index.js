import React from 'react';
import { createComponent } from 'cf-style-container';

const Square = createComponent(() => ({
  height: 100,
  width: 100,
  border: '4px solid blue',
  padding: '2rem',
  fontSize: '1.5rem',
  margin: '2rem'
}));

const markup = `
  <h4>React in React?</h4>
  <div>square?</div>
`;

export default () =>
  <article>
    <h1>12. Advanced</h1>
    <div dangerouslySetInnerHTML={{ __html: markup }} />
  </article>;
