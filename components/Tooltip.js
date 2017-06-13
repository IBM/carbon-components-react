import React from 'react';
import PropTypes from 'prop-types';
import Icon from './Icon';
import classNames from 'classnames';
if (!process.env.EXCLUDE_SASS) {
  import('carbon-components/consumables/scss/components/tooltips/tooltips.scss');
}

const propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  position: PropTypes.oneOf(['bottom', 'top']),
  text: PropTypes.string.isRequired,
  showIcon: PropTypes.bool,
};

const defaultProps = {
  position: 'top',
  showIcon: true,
};

const Tooltip = ({ children, className, position, text, showIcon, ...other }) => {
  const tooltipClasses = classNames(`bx--tooltip__${position}`, className);
  return (
    <div className={tooltipClasses} data-tooltip={text} {...other}>
      {children}
      {showIcon &&
        <Icon className="bx--tooltip__icon" name="info" description="Information" />}
    </div>
  );
};

Tooltip.propTypes = propTypes;
Tooltip.defaultProps = defaultProps;

export default Tooltip;
