import React from 'react';
import { createComponent } from 'cf-style-container';
import { button, active } from './styles.css';

export default class DynamicStyles extends React.Component {
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
        <h1>2. Dynamic Styles</h1>
        <button
          className={`${button} ${this.state.active ? active : ''}`}
          onClick={this.handleClick}
        >
          Hit me
        </button>
      </article>
    );
  }
}
