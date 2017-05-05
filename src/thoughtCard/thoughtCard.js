import React from 'react';

export const ThoughtCard = ({ thought }) => {
  return (
    <div>
    <h2>Thought #{thought.id.key}</h2>
    <h3 className='title'>{thought.title}</h3>
    <h3 className='body'>{thought.body}</h3>
    </div>
  )
}
