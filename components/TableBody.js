import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';

const propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

/**
 * Adds striping to TableRows if the `even` prop wasn’t explicitly set.
 * @param  {array} rows  React elements that are children of the TableBody
 * @return {array}       the updated child elements
 */
const handleRowStriping = rows => {
  let count = 0;

  return rows.map(child => {
    // Only make changes if it's a TableRow
    if (child.type.name === 'TableRow') {
      // manually increase the TableRow count
      count++;

      // Don’t override user-set `even` prop
      const even = 'even' in child.props ? child.props.even : count % 2 === 1;

      // Return a clone of the element with the `even` prop set.
      return React.cloneElement(child, { even });
    }

    return child;
  });
};

const TableBody = props => {
  const { children, className, ...other } = props;

  const tableBodyClasses = classNames(className, 'bx--table-body');

  const childArray = React.Children.toArray(children);
  const childrenWithProps = handleRowStriping(childArray);

  return (
    <tbody {...other} className={tableBodyClasses}>
      {childrenWithProps}
    </tbody>
  );
};

TableBody.propTypes = propTypes;

export default TableBody;
