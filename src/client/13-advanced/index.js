import React from 'react';
import { createComponent } from 'cf-style-container';
import { Box } from 'cf-component-box';
import Button from './Button';

const MyButton = createComponent(
  () => ({
    padding: 30
  }),
  Button
);

const Square = createComponent(() => ({
  height: '5em',
  width: '5em',
  border: '4px solid blue',
  padding: '2rem'
}));

const Advanced = () =>
  <article>
    <h1>13. Advanced</h1>
    <MyButton onClick={() => console.log('button clicked')}>Hello</MyButton>
    <Square>Something</Square>
    <Box height="5em" width="5em" border="4px solid blue" padding="2rem">
      Something
    </Box>
  </article>;

export default Advanced;
