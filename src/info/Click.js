import React, { useContext } from 'react';
import { GlobalContext } from '../state/GlobalState';
import '../app/Rows/Row.css';



export const Click = ({movie}) => {

    const {
        addingtoMyList,
        mylist,
    } = useContext(GlobalContext);

    let storage = mylist.find((o) => o.id === movie.id);

    const removeRepeat = storage ? true : false;

  return (
    
    <button className="btn" disabled={removeRepeat} onClick={() => addingtoMyList(movie)}>Add to My List</button> 
    
  )
}

export default Click;
