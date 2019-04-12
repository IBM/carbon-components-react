/**
 * Copyright IBM Corp. 2016, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { useState, useRef } from 'react';
import { settings } from 'carbon-components';
import cx from 'classnames';
import PropTypes from 'prop-types';
import { AriaLabelPropType } from '../../prop-types/AriaPropTypes';
import SideNavFooter from './SideNavFooter';

const { prefix } = settings;

const SideNav = React.forwardRef(function SideNav(props, ref) {
  const {
    expanded: expandedProp,
    defaultExpanded,
    'aria-label': ariaLabel,
    'aria-labelledby': ariaLabelledBy,
    children,
    className: customClassName,
    translateById: t,
  } = props;
  const { current: controlled } = useRef(expandedProp != null);
  const [expandedState, setExpandedState] = useState(defaultExpanded);
  const expanded = controlled ? expandedProp : expandedState;

  const handleExpand = ({ newState = !expanded }) => {
    if (!controlled) {
      setExpandedState(newState);
    }
  };

  const accessibilityLabel = {
    'aria-label': ariaLabel,
    'aria-labelledby': ariaLabelledBy,
  };

  const assistiveText = expanded
    ? t('carbon.sidenav.state.open')
    : t('carbon.sidenav.state.closed');

  const className = cx({
    [`${prefix}--side-nav`]: true,
    [`${prefix}--side-nav--expanded`]: expanded,
    [customClassName]: !!customClassName,
  });

  return (
    <nav
      ref={ref}
      className={`${prefix}--side-nav__navigation ${className}`}
      {...accessibilityLabel}
      onFocus={() => handleExpand({ newState: true })}
      onBlur={() => handleExpand({ newState: false })}>
      {children}
      <SideNavFooter
        assistiveText={assistiveText}
        isExpanded={expanded}
        onToggle={handleExpand}
      />
    </nav>
  );
});

SideNav.defaultProps = {
  translateById: id => {
    const translations = {
      'carbon.sidenav.state.open': 'Close',
      'carbon.sidenav.state.closed': 'Open',
    };
    return translations[id];
  },
  isExpanded: false,
};

SideNav.propTypes = {
  /**
   * If `true`, the SideNav will be expanded, otherwise it will be collapsed.
   * Using this prop causes SideNav to become a controled component.
   */
  expanded: PropTypes.bool,

  /**
   * If `true`, the SideNav will be open on initial render.
   */
  defaultExpanded: PropTypes.bool,

  /**
   * Required props for accessibility label on the underlying menu
   */
  ...AriaLabelPropType,

  /**
   * Optionally provide a custom class to apply to the underlying <li> node
   */
  className: PropTypes.string,

  /**
   * Provide a custom function for translating all message ids within this
   * component. This function will take in two arguments: the mesasge Id and the
   * state of the component. From this, you should return a string representing
   * the label you want displayed or read by screen readers.
   */
  translateById: PropTypes.func,
};

export default SideNav;
