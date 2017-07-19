// How to integrate with 3rd party libs?

import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StyleProvider } from 'cf-style-provider';
import { createComponent, withRenderer } from 'cf-style-container';

const styles = () => ({
  height: 100,
  width: 100,
  border: '4px solid blue',
  padding: '2rem',
  fontSize: '1.5rem',
  margin: '2rem'
});

// typical way how to integrate
const getMarkupString = renderer => {
  const className = renderer.renderRule(styles);
  return `
    <h4>React in React</h4>
    <div class="${className}">square?</div>
  `;
};

// better way (escaping is on!)
const getMarkup = renderer => {
  return ReactDOMServer.renderToStaticMarkup(
    <StyleProvider renderer={renderer}>
      <div>
        <h4>React in React</h4>
        <Square>squareeee?</Square>
      </div>
    </StyleProvider>
  );
};

export default withRenderer(({ renderer }) =>
  <article>
    <h1>12. Integration</h1>
    <div dangerouslySetInnerHTML={{ __html: getMarkup(renderer) }} />
  </article>
);
