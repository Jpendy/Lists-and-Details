import React from 'react';
import { shallow } from 'enzyme';
import PageButtons from './PageButtons';

describe('PageButtons component', () => {
  it('renders PageButtons', () => {
    const wrapper = shallow(<PageButtons page={1} handleClick={() => {}} />);
    expect(wrapper).toMatchSnapshot();
  });
});
  
