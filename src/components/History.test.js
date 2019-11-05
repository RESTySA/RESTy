import React from 'react';
import { shallow } from 'enzyme';
import History from './History';

describe('History component', () => {
  const test = {
    url: 'test.com',
    method: 'get'
  };

  it('renders History', () => {
    const wrapper = shallow(<History url={test.url} method={test.method} />);
    expect(wrapper).toMatchSnapshot();
  });
});