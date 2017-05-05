import React from 'react';
import {ThoughtCard} from '../thoughtCard/thoughtCard';

export const ThoughtList = ( {thoughtList} ) => {
console.log(thoughtList) // returns undefined
// console.log(props) // returns an empty object { } that does not have thoughts: [ ] in it?????
const thoughts = thoughtList.map((thought, i) => {
  return <ThoughtCard className='ThoughtCard' key={i} thought={thought} />
})

  return (
    <div className='thoughtList'>
      {thoughts}
    </div>
  );
}
