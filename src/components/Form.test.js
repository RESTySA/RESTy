import React from 'react';
import { shallow } from 'enzyme';
import Form from './Form';

describe('Form component', () => {
  const test = {
    url: 'test.com',
    handleChange: (() => {}),
    handleSubmit: (() => {})
  };

  it('renders Form', () => {
    const wrapper = shallow(<Form 
      url={test.url}
      handleChange={test.handleChange}
      handleSubmit={test.handleSubmit} />);
    expect(wrapper).toMatchSnapshot();
  });
});