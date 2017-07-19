// Testing with Jest and Enzyme

import React from 'react';
import { createComponent } from 'cf-style-container';

export const Button = createComponent(
  ({ active }) => ({
    padding: '2rem',
    backgroundColor: active ? '#ccc' : 'black'
  }),
  'button',
  ['onClick']
);

export default class Testing extends React.Component {
  constructor(props) {
    super(props);
    this.state = { active: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      active: !state.active
    }));
  }

  render() {
    return (
      <article>
        <h1>11. Testing</h1>
        <Button active={this.state.active} onClick={this.handleClick}>
          Add item
        </Button>
      </article>
    );
  }
}
