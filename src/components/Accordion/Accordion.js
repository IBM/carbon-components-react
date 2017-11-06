import PropTypes from 'prop-types';
import React from 'react';
import classnames from 'classnames';

const propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

const Accordion = ({ children, className, ...other }) => {
  const classNames = classnames('bx--accordion', className);
  return (
    <ul className={classNames} {...other}>
      {children}
    </ul>
  );
};

Accordion.propTypes = propTypes;

export default Accordion;
