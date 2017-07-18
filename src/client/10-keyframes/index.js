// Hint: https://github.com/rofrischmann/fela/tree/master/packages/fela-plugin-embedded

import React from 'react';
import { createComponent } from 'cf-style-container';
import {
  sun,
  sky,
  ground,
  cloudWrapper,
  cloud,
  cloud2,
  cloud3,
  moonWrapper,
  moon,
  moon2,
  animatesun,
  animatesky,
  animateground,
  animatecloud,
  animatemoon
} from './styles.css';

export default class Animation extends React.Component {
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
    const { active } = this.state;
    return (
      <article>
        <h1>10. Keyframes</h1>
        <div className={`${sky} ${active ? animatesky : ''}`}>
          <div className={`${cloudWrapper} ${active ? animatecloud : ''}`}>
            <div className={`${cloud}`} />
            <div className={`${cloud} ${cloud2}`} />
            <div className={`${cloud} ${cloud3}`} />
          </div>
          <div className={`${sun} ${active ? animatesun : ''}`} />
          <div className={`${moonWrapper} ${active ? animatemoon : ''}`}>
            <div className={moon} />
            <div className={`${moon} ${moon2}`} />
          </div>
          <div className={`${ground} ${active ? animateground : ''}`} />
        </div>
        <button onClick={this.handleClick}>
          {active ? 'Stop' : 'Play'}
        </button>
      </article>
    );
  }
}
