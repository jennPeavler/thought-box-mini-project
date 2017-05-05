import React from 'react';
import { shallow, mount } from 'enzyme';

import { ThoughtList } from './thoughtList.js';

describe('ThoughtList', () => {

  it('has a thoughtList class', () => {
    const thoughts = []
    const wrapper = shallow(<ThoughtList thoughtList={thoughts}/>)

    expect(wrapper.find('.thoughtList').length).toBe(1)
  });

  it('has multiple ThoughtCard class fields', () => {
    const thoughts = [{},{},{},{},{},{},{},{},{}]
    const wrapper = mount(<ThoughtList className='ThoughtCard' thoughtList={thoughts}/>)
    
    expect(wrapper.find('.ThoughtCard').length).toBe(9)
  });

});
