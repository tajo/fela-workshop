// 1) Don't mix longhand and shorthand properties
// 2) content: '"..."' - double quotes needed

import React from 'react';
import { createComponent } from 'cf-style-container';
import { box, loading } from './styles.css';

const Box = createComponent(() => ({
  border: '5px solid black',
  borderColor: 'blue'
}));

const Button = createComponent(
  () => ({
    color: 'white',
    backgroundColor: 'white',
    '::before': {
      content: '"…"',
      color: 'black',
      display: 'block',
      position: 'absolute'
    }
  }),
  'button'
);

export default () =>
  <article>
    <h1>9. Gotchas</h1>
    <div className={box}>Some box</div>
    <Box>Some box</Box>
    <button className={loading}>Button</button>
    <Button>Button</Button>
  </article>;
