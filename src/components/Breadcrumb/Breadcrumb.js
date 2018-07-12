import PropTypes from 'prop-types';
import React from 'react';
import classnames from 'classnames';

const Breadcrumb = ({ children, className, noTrailingSlash, ...other }) => {
  const classNames = classnames(className, {
    'bx--breadcrumb': true,
    'bx--breadcrumb--no-trailing-slash': noTrailingSlash,
  });
  return (
    <div className={classNames} {...other}>
      {children}
    </div>
  );
};

Breadcrumb.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  noTrailingSlash: PropTypes.bool,
};

export default Breadcrumb;
