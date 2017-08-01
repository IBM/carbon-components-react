import React from 'react';
import { OrderSummaryHeader } from '../OrderSummary';
import Dropdown from '../Dropdown';
import DropdownItem from '../DropdownItem';
import { mount } from 'enzyme';

describe('OrderSummary', () => {
  describe('Renders as expected', () => {
    const orderSummaryHeader = mount(
      <OrderSummaryHeader className="some-class" title="Order Summary">
        <Dropdown
          onChange={selectedItemInfo => console.log(selectedItemInfo)}
          defaultText="USD"
        >
          <DropdownItem itemText="USD" value="usd" />
          <DropdownItem itemText="GBP" value="gbp" />
          <DropdownItem itemText="NOK" value="nok" />
          <DropdownItem itemText="EUR" value="eur" />
        </Dropdown>
      </OrderSummaryHeader>
    );

    it('renders Order Summary Header', () => {
      expect(orderSummaryHeader.length).toEqual(1);
    });

    it('should render with the appropriate classes', () => {
      expect(orderSummaryHeader.hasClass('bx--order-header')).toEqual(true);
      expect(orderSummaryHeader.hasClass('some-class')).toEqual(true);
    });

    it('should render with the correct title', () => {
      expect(orderSummaryHeader.find('.bx--order-header-title').text()).toEqual(
        'Order Summary'
      );
    });

    it('should render children as expected', () => {
      expect(orderSummaryHeader.find(Dropdown).length).toEqual(1);
    });
  });
});
