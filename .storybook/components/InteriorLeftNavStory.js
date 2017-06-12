import React from 'react';
import { storiesOf } from '@storybook/react';
import InteriorLeftNav from '../../components/InteriorLeftNav';
import InteriorLeftNavItem from '../../components/InteriorLeftNavItem';
import InteriorLeftNavList from '../../components/InteriorLeftNavList';

storiesOf('InteriorLeftNav', module).addWithInfo(
  'Default',
  `
      Interior left navigation organizes the content structure and provides
      context to support user orientation. This pattern accommodates the
      breadth of content and tasks users expect to see.
    `,
  () =>
    <InteriorLeftNav>
      <InteriorLeftNavList title="Example Item 1">
        <InteriorLeftNavItem href="#example-item-1A">
          <a href="#">Link Child</a>
        </InteriorLeftNavItem>
        <InteriorLeftNavItem href="#example-item-1B">
          <a href="#">Link Child</a>
        </InteriorLeftNavItem>
        <InteriorLeftNavItem href="#example-item-1C">
          <a href="#">Link Child</a>
        </InteriorLeftNavItem>
      </InteriorLeftNavList>
      <InteriorLeftNavList title="Example Item 2">
        <InteriorLeftNavItem href="#example-item-2A">
          <a href="#">Link Child</a>
        </InteriorLeftNavItem>
        <InteriorLeftNavItem href="#example-item-2B">
          <a href="#">Link Child</a>
        </InteriorLeftNavItem>
        <InteriorLeftNavItem href="#example-item-2C">
          <a href="#">Link Child</a>
        </InteriorLeftNavItem>
        <InteriorLeftNavItem href="#example-item-2D">
          <a href="#">Link Child</a>
        </InteriorLeftNavItem>
      </InteriorLeftNavList>
      <InteriorLeftNavItem href="#example-item-3" label="Link Label" />
      <InteriorLeftNavItem href="#example-item-4" label="Link Label" />
    </InteriorLeftNav>
);
