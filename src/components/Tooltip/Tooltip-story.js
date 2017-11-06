import React from 'react';
import { storiesOf } from '@storybook/react';
import Tooltip from '../../components/Tooltip';

storiesOf('Tooltip', module)
  .addWithInfo(
    'default',
    `
      Tooltips are used to supply additional information to an element when hovering over it. By default,
      the tooltip will render above the element. The example below shows the default scenario.
    `,
    () => (
      <div style={{ marginTop: '2rem' }}>
        <Tooltip triggerText="Tooltip">
          <p className="bx--tooltip__label">Tooltip label</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
            aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
            occaeca cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </Tooltip>
      </div>
    )
  )
  .addWithInfo(
    'position',
    `
      Tooltips are used to supply additional information to an element when hovering over it. By default,
      the tooltip will render above the element. The example below shows specifying the position (supports 'bottom' and 'top')
    `,
    () => (
      <div style={{ marginTop: '2rem' }}>
        <Tooltip triggerText="Tooltip Top" direction="top">
          <p className="bx--tooltip__label">Tooltip label</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
            aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
            occaeca cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </Tooltip>
      </div>
    )
  )
  .addWithInfo(
    'no icon',
    `
      Tooltips are used to supply additional information to an element when hovering over it. By default,
      the tooltip will render with an information Icon. The example below shows the option to exclude the Icon.
    `,
    () => (
      <div style={{ marginTop: '2rem' }}>
        <Tooltip triggerText="No Icon Tooltip" showIcon={false}>
          <p className="bx--tooltip__label">Tooltip label</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
            aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
            occaeca cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </Tooltip>
      </div>
    )
  );
