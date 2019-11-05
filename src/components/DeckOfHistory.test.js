import React from 'react';
import { shallow } from 'enzyme';
import DeckOfHistory from './DeckOfHistory';

describe('DeckOfHistory component', () => {
  const test = [{
    id: '5da237699734fdcb7bef8f51',
    url: 'test.com',
    method: 'get'
  },
  {
    id: '5da237699734fdcb7bef8f52',
    url: 'test.com',
    method: 'post'
  }
  ];

  it('renders DeckOfHistory', () => {
    const wrapper = shallow(<DeckOfHistory history={test} />);
    expect(wrapper).toMatchSnapshot();
  });
});