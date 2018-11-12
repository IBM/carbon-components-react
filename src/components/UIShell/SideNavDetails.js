import cx from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

const SideNavDetails = ({ children, className: customClassName, title }) => {
  const className = cx('bx--side-nav__details', customClassName);
  return (
    <div className={className}>
      <h2 className="bx--side-nav__title" title={title}>
        {title}
      </h2>
      {children}
    </div>
  );
};

SideNavDetails.displayName = 'SideNavDetails';

SideNavDetails.propTypes = {
  /**
   * Optionally provide a custom class to apply to the underlying <li> node
   */
  className: PropTypes.string,

  /**
   * Provide optional children to render in `SideNavDetails`. Useful for
   * rendering the `SideNavSwitcher` component.
   */
  children: PropTypes.node,

  /**
   * Provide the text that will be rendered as the title in the component
   */
  title: PropTypes.string.isRequired,
};

export default SideNavDetails;
