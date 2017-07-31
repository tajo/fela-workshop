import React from 'react';
import { createComponent } from 'cf-style-container';

const Heading = createComponent(
  () => ({
    color: 'blue'
  }),
  'h2'
);

const SubHeading = createComponent(() => ({
  fontSize: '0.7em',
  fontStyle: 'italic',
  color: 'black'
}));

const StrictHeading = ({ heading, subheading }) =>
  <Heading>
    {heading}
    <SubHeading>
      {subheading}
    </SubHeading>
  </Heading>;

export default () =>
  <article>
    <h1>15. Composition</h1>
    <Heading>
      Hey world<SubHeading>cruel world</SubHeading>
    </Heading>
    <StrictHeading heading="Hey world" subheading="cruel world" />
  </article>;
