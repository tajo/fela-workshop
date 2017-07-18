// How to define a font?
// Use https://github.com/rofrischmann/fela/tree/master/packages/fela-plugin-embedded !

import React from 'react';
import { createComponent } from 'cf-style-container';
import { stylish } from './styles.css';

const Stylish = createComponent(
  () => ({
    fontFace: {
      fontFamily: '"Pacifico", cursive',
      src: ['./pacifico.ttf']
    }
  }),
  'h2'
);

export default () =>
  <article>
    <h1>4. Fonts</h1>
    <h2 className={stylish}>Kitten Mittens</h2>
    <Stylish>Kitten Mittens</Stylish>
  </article>;
