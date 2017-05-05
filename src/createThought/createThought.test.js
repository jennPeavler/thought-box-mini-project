import React from 'react';
import { shallow, mount } from 'enzyme';

import CreateThought from './createThought.js';

describe('CreateThought', () => {
  const shallowWrapper = shallow(<CreateThought />)
  const wrapper = mount(<CreateThought />)

  it('has two input fields', () => {
    expect(shallowWrapper.find('input').length).toBe(2)
  });

  it('has a default state containing a body and title both starting with empty string', () => {
    const expectedState = {
      title: '',
      body: ''
    }

    expect(shallowWrapper.state()).toEqual(expectedState)
  });

  it('fires an onChange event on user input which should update both state & the input field when user enters title', () => {
    const input = wrapper.find('#title-input')
    const expectedState = {
      title: 'abc',
      body: ''
    }

    input.simulate('change', { target: {value: 'abc'}})

    expect(input.node.value).toEqual('abc')
    expect(wrapper.state()).toEqual(expectedState)
  });

  it('fires onChange on second input which should update both state & the input field when user enters body', () => {
    const wrapper = mount(<CreateThought />)
    const input = wrapper.find('#body-input')
    const expectedState = {
      title: '',
      body: 'Hi dare'
    }

    input.simulate('change', { target: {value: 'Hi dare'}})

    expect(input.node.value).toEqual('Hi dare')
    expect(wrapper.state()).toEqual(expectedState)
  });

  it('has a submit button', () => {
    expect(wrapper.find('button').length).toBe(1)
  });

  it('fires submitIdea function with the data from state as an argument, and input fields go back to empty strings', () => {
    const mockedSubmit = jest.fn();
    const wrapper = mount(
      <CreateThought createThought={mockedSubmit} />
    );
    const expectedState = {
      title: '',
      body: ''
    };
    const input = wrapper.find('input').last();

    input.simulate('change', { target: { value: 'abc' } });
    wrapper.find('button').simulate('click');

    expect(wrapper.state()).toEqual(expectedState)
    expect(input.node.value).toEqual('')
    expect(mockedSubmit).toHaveBeenCalledTimes(1)
    expect(mockedSubmit).toHaveBeenCalledWith({title: '', body: 'abc'})
  });
});
