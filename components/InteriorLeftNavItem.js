import PropTypes from 'prop-types';
import React from 'react';
import classnames from 'classnames';

const propTypes = {
  className: PropTypes.string,
  href: PropTypes.string.isRequired,
  activeHref: PropTypes.string,
  tabIndex: PropTypes.number,
  onClick: PropTypes.func,
  blankTarget: PropTypes.bool,
  children: PropTypes.node,
};

const defaultProps = {
  activeHref: '#',
  tabIndex: 0,
  onClick: /* istanbul ignore next */ () => {},
};

const InteriorLeftNavItem = ({
  className,
  href,
  activeHref,
  onClick,
  tabIndex,
  children,
  ...other
}) => {
  const classNames = classnames('left-nav-list__item', className, {
    'left-nav-list__item--active': activeHref === href,
  });

  const child = React.Children.only(children);
  const newChild = React.cloneElement(child, {
    tabIndex,
    className: 'left-nav-list__item-link',
  });

  return (
    <li
      role="menuitem"
      tabIndex={tabIndex}
      className={classNames}
      onClick={evt => onClick(evt, href)}
      onKeyPress={evt => onClick(evt, href)}
      {...other}
    >
      {newChild}
    </li>
  );
};

InteriorLeftNavItem.propTypes = propTypes;
InteriorLeftNavItem.defaultProps = defaultProps;

export default InteriorLeftNavItem;
