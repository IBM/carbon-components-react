import React from 'react';
import { configure, addDecorator, addParameters } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
// import { withA11y } from '@storybook/addon-a11y';
import Container from './Container';

addParameters({
  options: {
    theme: {
      brandTitle: 'carbon components react',
      brandUrl: 'https://github.com/IBM/carbon-components-react',
    },
  },
});

addDecorator(
  withInfo({
    maxPropStringLength: 200, // Displays the first 200 characters in the default prop string
  })
);

addDecorator(story => <Container story={story} />);

// addDecorator(withA11y);

function loadStories() {
  const req = require.context('../src/components', true, /\-story\.js$/);
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
