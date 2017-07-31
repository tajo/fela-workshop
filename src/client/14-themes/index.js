import React from 'react';
import { createComponent, ThemeProvider, applyTheme } from 'cf-style-container';

const Square = createComponent(({ theme }) => ({
  height: '5em',
  width: '5em',
  backgroundColor: theme.backgroundColor,
  border: theme.border,
  color: theme.color,
  padding: '2rem',
  margin: 5
}));

const MySquare = applyTheme(
  Square,
  theme => ({
    backgroundColor: theme.color
  }),
  { color: 'white' },
  { border: '10px dotted blue' }
);

export default () =>
  <article>
    <h1>14. Themes</h1>
    <ThemeProvider theme={{ color: 'red', border: '5px solid black' }}>
      <div>
        <ThemeProvider theme={{ color: 'blue' }}>
          <Square>Something</Square>
        </ThemeProvider>
        <Square>Something different</Square>
        <MySquare>Something different</MySquare>
      </div>
    </ThemeProvider>
  </article>;
