/**
 * Copyright IBM Corp. 2016, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import Fade32 from '@carbon/icons-react/lib/fade/32';
import React from 'react';
import { mount } from 'enzyme';
import { HeaderGlobalAction } from '../';

describe('HeaderGlobalAction', () => {
  let mockProps;

  beforeEach(() => {
    mockProps = {
      'aria-label': 'Accessibility label',
      className: 'custom-class',
      onClick: jest.fn(),
      isActive: false,
    };
  });

  it('should render', () => {
    const wrapper = mount(
      <HeaderGlobalAction {...mockProps}>
        <Fade32 />
      </HeaderGlobalAction>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
