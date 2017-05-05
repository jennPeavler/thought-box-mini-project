import React from 'react';
import { shallow } from 'enzyme';

import { ThoughtCard } from './thoughtCard.js';

describe('ThoughtCard', () => {
  const thought = {title: 'you are', body: 'fantastic'}
  const wrapper = shallow(<ThoughtCard thought={thought}/>)

  it('has a thoughtCard class field', () => {
    expect(wrapper.find('.ThoughtCard').length).toBe(1)
  });

  it('has a title and body', () => {
    expect(wrapper.find('.title').length).toBe(1)
    expect(wrapper.find('.body').length).toBe(1)
  });

});
