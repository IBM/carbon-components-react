import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Icon from './Icon';
import Select from './Select';
import SelectItem from './SelectItem';
import TextInput from './TextInput';

import { equals } from '../lib/array';

if (!process.env.EXCLUDE_SASS) {
  import('carbon-components/consumables/scss/components/pagination/pagination.scss');
}

class Pagination extends Component {
  static propTypes = {
    backwardText: PropTypes.string,
    className: PropTypes.string,
    itemRangeText: PropTypes.func,
    forwardText: PropTypes.string,
    itemsPerPageText: PropTypes.string,
    onChange: PropTypes.func,
    pageNumberText: PropTypes.string,
    pageRangeText: PropTypes.func,
    pageSizes: PropTypes.arrayOf(PropTypes.number).isRequired,
    totalItems: PropTypes.number.isRequired,
    disabled: PropTypes.bool,
    page: PropTypes.number,
    pageSize: PropTypes.number,
    pagesUnknown: PropTypes.bool,
  }
  static defaultProps = {
    backwardText: 'Backward',
    itemRangeText: (min, max, total) => `${min}-${max} of ${total} items`,
    forwardText: 'Forward',
    itemsPerPageText: 'Items per page',
    onChange: () => {},
    pageNumberText: 'Page Number',
    pageRangeText: (current, total) => `${current} of ${total} pages`,
    disabled: false,
    page: 1,
  }
  static uuid = 0
  state = {
    page: this.props.page,
    pageSize: ((this.props.pageSize && this.props.pageSizes.includes(this.props.pageSize)) ?
      this.props.pageSize : this.props.pageSizes[0]),
    pagesUnknown: this.props.pagesUnknown || false
  }
  componentWillReceiveProps({ pageSizes, page, pageSize }) {
    if (!equals(pageSizes, this.props.pageSizes)) {
      this.setState({ pageSize: pageSizes[0], page: 1 });
    }
    if (page !== this.props.page) {
      this.setState({ page });
    }

    if (pageSize !== this.props.pageSize) {
      this.setState({ pageSize });
    }
  }
  id = Pagination.uuid++
  handleSizeChange = (evt) => {
    const pageSize = Number(evt.target.value);
    this.setState({ pageSize, page: 1 });
    this.props.onChange({ page: 1, pageSize });
  }
  handlePageInputChange = (evt) => {
    const page = Number(evt.target.value);
    if (page > 0 && page <= Math.ceil(this.props.totalItems / this.state.pageSize)) {
      this.setState({ page });
      this.props.onChange({ page, pageSize: this.state.pageSize });
    }
  }
  incrementPage = () => {
    const page = this.state.page + 1;
    this.setState({ page });
    this.props.onChange({ page, pageSize: this.state.pageSize });
  }
  decrementPage = () => {
    const page = this.state.page - 1;
    this.setState({ page });
    this.props.onChange({ page, pageSize: this.state.pageSize });
  }
  render() {
    const {
      backwardText,
      className,
      forwardText,
      itemsPerPageText,
      itemRangeText,
      pageNumberText,
      pageRangeText,
      pageSizes,
      totalItems,
      onChange, // eslint-disable-line no-unused-vars
      page: pageNumber, // eslint-disable-line no-unused-vars
      ...other,
    } = this.props;

    const {
      page,
      pageSize,
      pagesUnknown
    } = this.state;
    const classNames = classnames('bx--pagination', className);

    if (pagesUnknown) {
      const paginationStyles = {
        height: '34px',
        paddingRight: '.25rem'
      }

      const spanStyle = {
        margin: '0 .5rem'
      }

      const controlStyles = {
        borderLeft: '1px solid #dfe3e6',
        height: '34px',
        display: 'flex',
        alignItems: 'center',
        marginLeft: '1rem',
      }

      const buttonStyleLeft = {
        borderRight: '1px solid #dfe3e6',
        marginRight: 0,
        marginLeft: 0,
        paddingRight: '.75rem',
        paddingLeft: '.625rem'
      }
      const buttonStyleRight = {
        paddingLeft: '.75rem',
        marginLeft: 0,
        marginRight: 0,
      }
      return (
        <div className={classNames} style={paginationStyles} {...other}>
          <div className="bx--pagination__right">
            <span className="bx--pagination__text">
              {pageSize * (page - 1) + 1}-{page * pageSize} Items <span style={spanStyle}>|</span> Page {page}
            </span>
            <div className="bx--pagination--controls" style={controlStyles}>
              <button
                className="bx--pagination__button bx--pagination__button--backward"
                onClick={this.decrementPage}
                disabled={this.props.disabled || (page === 1)}
                style={buttonStyleLeft}
              >
                <div>
                  <Icon name="chevron--left" description={backwardText} />
                </div>
              </button>
              <button
                className="bx--pagination__button bx--pagination__button--forward"
                onClick={this.incrementPage}
                disabled={this.props.disabled || (page === Math.ceil(totalItems / pageSize))}
                style={buttonStyleRight}
              >
                <div>
                  <Icon name="chevron--right" description={forwardText} />
                </div>
              </button>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className={classNames} {...other}>
          <div className="bx--pagination__left">
            <Select
              id={`bx-pagination-select-${this.id}`}
              labelText={itemsPerPageText}
              hideLabel
              onChange={this.handleSizeChange}
              value={pageSize}
            >
              {pageSizes.map(size => <SelectItem key={size} value={size} text={String(size)} />)}
            </Select>
            <span className="bx--pagination__text">{itemsPerPageText}&nbsp;&nbsp;|&nbsp;&nbsp;</span>
            <span className="bx--pagination__text">
              {itemRangeText(pageSize * (page - 1) + 1, Math.min(page * pageSize, totalItems), totalItems)}
            </span>
          </div>
          <div className="bx--pagination__right">
            <span className="bx--pagination__text">
              {pageRangeText(page, Math.ceil(totalItems / pageSize))}
            </span>
            <button
              className="bx--pagination__button bx--pagination__button--backward"
              onClick={this.decrementPage}
              disabled={this.props.disabled || (page === 1)}
            >
              <div>
                <Icon name="chevron--left" description={backwardText} />
              </div>
            </button>
            <TextInput
              id={`bx-pagination-input-${this.id}`}
              placeholder="0"
              value={page}
              onChange={this.handlePageInputChange}
              labelText={pageNumberText}
              hideLabel
            />
            <button
              className="bx--pagination__button bx--pagination__button--forward"
              onClick={this.incrementPage}
              disabled={this.props.disabled || (page === Math.ceil(totalItems / pageSize))}
            >
              <div>
                <Icon name="chevron--right" description={forwardText} />
              </div>
            </button>
          </div>
        </div>
      );
    }
  }
}

export default Pagination;
