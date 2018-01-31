/**
 * We currently support the following sorting states for DataTable headers,
 * namely: `NONE` for no sorting being applied, and then `DESC` and `ASC` for
 * the corresponding direction of the sorting order.
 */
export const sortStates = {
  NONE: 'NONE',
  DESC: 'DESC',
  ASC: 'ASC',
};

// Our initialSortState should be `NONE`, unless a consumer has specified a
// different initialSortState
export const initialSortState = sortStates.NONE;

/**
 * Utility used to get the next sort state given the following pieces of
 * information:
 *
 * @param {String} prevHeader the value of the previous header
 * @param {String} header the value of the currently selected header
 * @param {String} prevState the previous sort state of the table
 * @returns {String}
 */
export const getNextSortDirection = (prevHeader, header, prevState) => {
  // If the previous header is equivalent to the current header, we know that we
  // have to derive the next sort state from the previous sort state
  if (prevHeader === header) {
    // When transitioning, we know that the sequence of states is as follows:
    // NONE -> DESC -> ASC -> NONE
    if (prevState === 'NONE') {
      return sortStates.DESC;
    }
    if (prevState === 'DESC') {
      return sortStates.ASC;
    }
    return sortStates.NONE;
  }
  // Otherwise, we have selected a new header and need to start off by sorting
  // in descending order by default
  return sortStates.DESC;
};

/**
 * Derive the next set of sort state fields from props and state for the given
 * header key.
 *
 * @param {Object} props
 * @param {String} props.locale The current locale
 * @param {Function} props.sortRows Method to handle sorting a collection of
 * rows
 * @param {Object} state
 * @param {Array[String]} state.rowIds Array of row ids
 * @param {Object} state.cellsById Lookup object for cells by id
 * @param {String} state.sortDirection The current sort direction
 * @param {String} state.sortHeaderKey The current sort header ky
 * @param {Array[String]} state.initialRowOrder Initial row order for the
 * current set of rows
 * @param {Object} options
 * @param {String} options.key the key for the given header we are derving the
 * next sort state for
 * @return {Object}
 */
export const getNextSortState = (props, state, { key }) => {
  const {
    rowIds,
    cellsById,
    sortDirection,
    sortHeaderKey,
    initialRowOrder,
  } = state;
  const { locale, sortRows } = props;
  const nextSortDirection = getNextSortDirection(
    key,
    sortHeaderKey,
    sortDirection
  );
  const nextRowIds =
    nextSortDirection !== sortStates.NONE
      ? sortRows({
          rowIds,
          cellsById,
          direction: sortDirection,
          key,
          locale,
        })
      : initialRowOrder;
  return {
    sortHeaderKey: key,
    sortDirection: nextSortDirection,
    rowIds: nextRowIds,
  };
};
