import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { withKnobs, boolean, select, text } from '@storybook/addon-knobs';
import DropdownV2 from '../DropdownV2';
import DropdownItem from '../DropdownItem';
import DropdownSkeleton from '../DropdownV2/Dropdown.Skeleton';
import WithState from '../../tools/withState';

const items = [
  {
    id: 'option-1',
    text: 'Option 1',
  },
  {
    id: 'option-2',
    text: 'Option 2',
  },
  {
    id: 'option-3',
    text: 'Option 3',
  },
  {
    id: 'option-4',
    text: 'Option 4',
  },
];

const dropdownItems = [
  { itemText: 'hello', value: 'hello', style: { opacity: 1 } },
  { itemText: 'world', value: 'world', style: { opacity: 1 } },
];

const types = {
  'Default (default)': 'default',
  'Inline (inline)': 'inline',
};

const props = () => ({
  type: select('Dropdown type (type)', types, 'default'),
  label: text('Label (label)', 'Label'),
  ariaLabel: text('Aria Label (ariaLabel)', 'Dropdown'),
  disabled: boolean('Disabled (disabled)', false),
  light: boolean('Light variant (light)', false),
});

const itemToElement = item => {
  const itemAsArray = item.text.split(' ');
  return (
    <div>
      <span>{itemAsArray[0]}</span>
      <span style={{ color: 'red' }}> {itemAsArray[1]}</span>
    </div>
  );
};

storiesOf('DropdownV2', module)
  .addDecorator(withKnobs)
  .add(
    'default',
    () => (
      <div style={{ width: 300 }}>
        <DropdownV2
          {...props()}
          items={items}
          itemToString={item => (item ? item.text : '')}
          onChange={action('onChange')}
        />
      </div>
    ),
    {
      info: {
        text: 'DropdownV2',
      },
    }
  )
  .add(
    'items as components',
    withInfo({
      text: `
        Rendering items as custom components
      `,
    })(() => (
      <div style={{ width: 300 }}>
        <DropdownV2
          {...props()}
          items={items}
          itemToString={item => (item ? item.text : '')}
          itemToElement={itemToElement}
          onChange={action('onChange')}
        />
      </div>
    ))
  )
  .add(
    'with DropdownItems',
    withInfo({
      text: `
        Using DropdownItem as the components to render. Has some kinks due to the onClick in the DropdownItem.
      `,
    })(() => (
      <div style={{ width: 300 }}>
        <DropdownV2
          {...props()}
          items={dropdownItems}
          itemToString={item => (item ? item.itemText : '')}
          itemToElement={DropdownItem}
          onChange={action('onChange')}
        />
      </div>
    ))
  )
  .add(
    'fully controlled',
    () => (
      <WithState initialState={{ selectedItem: items[0] }}>
        {({ state, setState }) => (
          <div style={{ width: 300 }}>
            <DropdownV2
              {...props()}
              items={items}
              itemToString={item => (item ? item.text : '')}
              onChange={({ selectedItem }) =>
                setTimeout(() => setState({ selectedItem }), 1000)
              }
              selectedItem={state.selectedItem}
            />
          </div>
        )}
      </WithState>
    ),
    {
      info: {
        text: `
            Sometimes you want to control everything.
          `,
      },
    }
  )
  .add(
    'skeleton',
    () => (
      <div style={{ width: 300 }}>
        <DropdownSkeleton />
        &nbsp;
        <DropdownSkeleton inline />
      </div>
    ),
    {
      info: {
        text: `
            Placeholder skeleton state to use when content is loading.
          `,
      },
    }
  );
