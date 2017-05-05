import React from 'react';
import { shallow, mount } from 'enzyme';

import { ThoughtList } from './thoughtList.js';

describe('ThoughtList', () => {

  it('has a thoughtList class', () => {
    const wrapper = shallow(<ThoughtList />)

    expect(wrapper.find('.thoughtList').length).toBe(1)
  });

  it('has multiple ThoughtCard class fields', () => {
    const ideas = [{},{},{},{},{},{},{},{},{}]
    const wrapper = mount(<ThoughtList className='ThoughtCard' thoughtList={ideas}/>)

    expect(wrapper.find('.ThoughtCard').length).toBe(9)
  });

});
