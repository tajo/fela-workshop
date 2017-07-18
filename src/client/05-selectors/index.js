// Selectors get tricky. You should probably avoid them altogether since
// they break component style isolation.

import React from 'react';
import { createComponent } from 'cf-style-container';
import { header, btn } from './styles.css';

const Schwifty = createComponent(() => ({
  color: 'blue',
  ':hover': {
    textDecoration: 'line-through'
  }
}));

const Button = createComponent(
  ({ index }) => ({
    backgroundColor: 'orange',
    marginLeft: index > 0 ? 0 : 25,
    '> span': {
      fontSize: 20
    }
  }),
  'button'
);

const ButtonGroup = ({ children }) =>
  <div>
    {React.Children.map(children, (child, index) =>
      React.cloneElement(child, {
        index: index
      })
    )}
  </div>;

export default () =>
  <article>
    <h1>5. Selectors</h1>
    <div className={header}>Schwifty</div>
    <Schwifty>Schwifty</Schwifty>
    <p>
      <button className={btn}>
        Button 1 <span>BIG</span>
      </button>
      <button className={btn}>Button 2</button>
    </p>
    <ButtonGroup>
      <Button>
        Button 1 <span>BIG</span>
      </Button>
      <Button>Button 2</Button>
    </ButtonGroup>
  </article>;
