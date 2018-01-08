import React from 'react';
import { storiesOf } from '@storybook/react';
import InteriorLeftNav from '../InteriorLeftNav';
import InteriorLeftNavItem from '../InteriorLeftNavItem';
import InteriorLeftNavList from '../InteriorLeftNavList';

// For demo purposes
import { BrowserRouter, Link } from 'react-router-dom';

storiesOf('InteriorLeftNav', module).addWithInfo(
  'Default',
  `
      Interior left navigation organizes the content structure and provides
      context to support user orientation. This pattern accommodates the
      breadth of content and tasks users expect to see.
    `,
  () => (
    <BrowserRouter>
      <InteriorLeftNav>
        <InteriorLeftNavList title="Example Item 1">
          <InteriorLeftNavItem>
            <Link target="_blank" to="http://www.carbondesignsystem.com">
              Link Child
            </Link>
          </InteriorLeftNavItem>
          <InteriorLeftNavItem>
            <a href="http://www.carbondesignsystem.com">Link Child</a>
          </InteriorLeftNavItem>
          <InteriorLeftNavItem>
            <a href="http://www.carbondesignsystem.com">Link Child</a>
          </InteriorLeftNavItem>
        </InteriorLeftNavList>
        <InteriorLeftNavList title="Example Item 2">
          <InteriorLeftNavItem>
            <a href="http://www.carbondesignsystem.com">Link Child</a>
          </InteriorLeftNavItem>
          <InteriorLeftNavItem>
            <a href="http://www.carbondesignsystem.com">Link Child</a>
          </InteriorLeftNavItem>
          <InteriorLeftNavItem>
            <a href="http://www.carbondesignsystem.com">Link Child</a>
          </InteriorLeftNavItem>
          <InteriorLeftNavItem>
            <a href="http://www.carbondesignsystem.com">Link Child</a>
          </InteriorLeftNavItem>
        </InteriorLeftNavList>
        <InteriorLeftNavItem>
          <a href="#example-1">Link label</a>
        </InteriorLeftNavItem>
        <InteriorLeftNavItem>
          <a href="http://www.carbondesignsystem.com" target="_blank">
            Link label 2
          </a>
        </InteriorLeftNavItem>
      </InteriorLeftNav>
    </BrowserRouter>
  )
);
