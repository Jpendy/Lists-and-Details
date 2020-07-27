import React from 'react';
import { shallow } from 'enzyme';
import List from './List';

describe('List component', () => {
  it('renders List', () => {
    const wrapper = shallow(<List listArray={[{ thing: 'thing1', _id: 1 }, { thing: 'thing2', _id: 2 }]} />);
    expect(wrapper).toMatchSnapshot();
  });
});
  
