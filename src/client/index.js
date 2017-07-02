import React from 'react';
import ReactDOM from 'react-dom';
import Main from './main';

const rootEl = document.getElementById('app-root');
ReactDOM.render(<Main />, rootEl);

if (module.hot) {
  module.hot.accept('./main', () => {
    const NextApp = require('./main').default; // eslint-disable-line
    ReactDOM.render(<NextApp />, rootEl);
  });
}
