import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Pagination from '../../components/Pagination';

const props = {
  onChange: ({ page, pageSize }) => {
    console.log(`Page: ${page}`, `Page Size: ${pageSize}`); // eslint-disable-line no-console
  },
  pageSizes: [20, 20, 30, 40, 50],
  pagesUnknown: true,
};

storiesOf('Pagination', module)
  .addDecorator(story => (
    <div style={{ width: '800px' }}>
      {story()}
    </div>
  ))
  .addWithInfo(
    '',
    `
      Description coming soon.
    `,
    () => <Pagination {...props} totalItems={103} />
  );
