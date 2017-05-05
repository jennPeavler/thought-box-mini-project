import React from 'react';
import { shallow, mount } from 'enzyme';
import App from './App';

describe('App', () => {
  const wrapper = shallow(<App />)
  const wrapperMount = mount(<App />)
  const app = new App

  it('renders App with className app', () => {
    expect(wrapper.find('.app').length).toBe(1)
  });

  it('initial state starts with an empty array', () => {
   expect(app.state.thoughts).toEqual([])
  });

  it('having 2 thoughts in state should mean there are two thoughtCards', () => {
    wrapperMount.setState(
      {thoughts:
        [
          {title: 'you are', body: 'fantastic'},
          {title: 'you are', body: 'fantastic'}
        ]
      })

    expect(wrapperMount.find('.ThoughtCard').length).toBe(2)
  });

  it('user can add a new thought which adds it to state and is also displayed on the screen', () => {
    const wrapper = mount(<App />)
    const inputTitle = wrapper.find('input').first()
    const inputBody = wrapper.find('input').last()
    const buttonSubmit = wrapper.find('button')

    inputTitle.simulate('change', { target: { value: 'you are' } });
    inputBody.simulate('change', { target: { value: 'fantastic' } });
    buttonSubmit.simulate('click')

    expect(wrapper.find('.ThoughtCard').length).toEqual(1)
  });
})
