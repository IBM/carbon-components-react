import React from 'react';
import CodeSnippet from '../CodeSnippet';
import CodeSnippetSkeleton from '../CodeSnippet/CodeSnippet.Skeleton';
import Copy from '../Copy';
import CopyButton from '../CopyButton';
import { shallow, mount } from 'enzyme';

describe('Code Snippet', () => {
  describe('Renders as expected', () => {
    const snippet = shallow(
      <CodeSnippet className="some-class" type="single">
        {'node -v'}
      </CodeSnippet>
    );

    it('should use the appropriate snippet class', () => {
      expect(snippet.hasClass('bx--snippet')).toEqual(true);
      expect(snippet.hasClass('bx--snippet--single')).toEqual(true);
    });

    it('should render children as expected', () => {
      expect(snippet.find('.bx--snippet-container').length).toBe(1);
    });

    it('should all for custom classes to be applied', () => {
      expect(snippet.hasClass('some-class')).toEqual(true);
    });
  });

  describe('Triggers appropriate events', () => {
    it('should call the click handler', () => {
      const onClick = jest.fn();
      const clickWrapper = mount(<CodeSnippet onClick={onClick} />);
      clickWrapper.find(CopyButton).simulate('click');
      expect(onClick).toBeCalled();
    });

    it('should call the click handler with type="inline"', () => {
      const onClick = jest.fn();
      const clickWrapper = mount(
        <CodeSnippet type={'inline'} onClick={onClick} />
      );
      clickWrapper.find(Copy).simulate('click');
      expect(onClick).toBeCalled();
    });
  });
});

describe('CodeSnippetSkeleton', () => {
  describe('Renders as expected', () => {
    const wrapper = shallow(<CodeSnippetSkeleton type="single" />);

    it('Has the expected classes', () => {
      expect(wrapper.hasClass('bx--skeleton')).toEqual(true);
      expect(wrapper.hasClass('bx--snippet')).toEqual(true);
      expect(wrapper.hasClass('bx--snippet--single')).toEqual(true);
    });
  });
});
