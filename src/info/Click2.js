import React, { useContext } from 'react';
import { GlobalContext } from '../state/GlobalState';
import '../app/Rows/Row.css';

export const Click2 = ({ movie }) => {

  const {
    mylist2,
    addingtoMyList2,
  } = useContext(GlobalContext);

  let storage = mylist2.find((o) => o.id === movie.id);

  const removeRepeat = storage ? true : false;

  return (
    
      <button className="btn" disabled={removeRepeat} onClick={() => addingtoMyList2(movie)}>Add to My List</button>
    
  )
}

export default Click2;