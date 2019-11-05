import React from 'react';
import { shallow } from 'enzyme';
import Results from './Results';

describe('Results component', () => {
  const test = {
    text: 'testy test test test'
  };

  it('renders Results', () => {
    const wrapper = shallow(<Results text={test.url} />);
    expect(wrapper).toMatchSnapshot();
  });
});