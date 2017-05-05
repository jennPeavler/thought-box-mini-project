import React from 'react';
import {ThoughtCard} from '../thoughtCard/thoughtCard';

export const ThoughtList = ( {thoughtList} ) => {

const thoughts = thoughtList.map((thought, i) => {
  return <ThoughtCard key={i} thought={thought} />
})

  return (
    <div className='thoughtList'>
      {thoughts}
    </div>
  );
}
