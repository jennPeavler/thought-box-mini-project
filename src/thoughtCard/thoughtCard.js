import React from 'react';

export const ThoughtCard = ({ thought }) => {

  return (
    <div className='ThoughtCard'>
    <h2>My Thought</h2>
    <h3 className='title'>{thought.title}</h3>
    <h3 className='body'>{thought.body}</h3>
    </div>
  )
}
