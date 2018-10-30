import cx from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

// TODO
// Submenu
// Custom icon
const SideNavTitleBar = ({ children, title }) => {
  return (
    <header className="bx--side-nav__title-bar bx--side-nav__title-bar--sub-menu">
      <div className="bx--side-nav__icon">
        <svg
          width="20"
          height="20"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          aria-hidden="true">
          <path d="M8.24 25.14L7 26.67a14 14 0 0 0 4.18 2.44l.68-1.88a12 12 0 0 1-3.62-2.09zm-4.05-7.07l-2 .35A13.89 13.89 0 0 0 3.86 23l1.73-1a11.9 11.9 0 0 1-1.4-3.93zm7.63-13.31l-.68-1.88A14 14 0 0 0 7 5.33l1.24 1.53a12 12 0 0 1 3.58-2.1zM5.59 10L3.86 9a13.89 13.89 0 0 0-1.64 4.54l2 .35A11.9 11.9 0 0 1 5.59 10zM16 2v2a12 12 0 0 1 0 24v2a14 14 0 0 0 0-28z" />
        </svg>
      </div>
      <div className="bx--side-nav__title-details">
        <div className="bx--side-nav__title">{title}</div>
        {children}
      </div>
    </header>
  );
};

export default SideNavTitleBar;
