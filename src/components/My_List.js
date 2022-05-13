
import React, { useContext } from 'react';
import { GlobalContext } from "../state/GlobalState";
import Poster from '../app/Posters/Poster';
import Poster2 from '../app/Posters/Poster2';
import '../app/Searches/Search.css';

export const My_List = () => {

  const { mylist, mylist2, removingfromMyList, } = useContext(GlobalContext);

  return (

    <div className='mylist-default'>

      <div>
        <div className='mylist-header'>
          <h2>My List</h2>
        </div>

        <span className="count-pill">
          
          {mylist.length === 1 ? (mylist.length + "  Movie") : mylist.length > 1 ? (mylist.length + "  Movies") : (" ")}
        </span>

      </div>

      


      {mylist.length > 0 ? (

        <div className='mylist-picked'>

          <div className="results3">
          {mylist.map((movie,i) => (
            
            
            
            <Poster movie={movie} key={i} type="mylist" />
            
             
          ))}
          
            
          </div>
          <div>
          </div>

        </div>
      ) : (
        <h2></h2>
      )}

      <span className="count-pill">
        {mylist2.length === 1 ? (mylist2.length + "  Show") : mylist2.length > 1 ? (mylist2.length + "  Shows") : (" ")}
      </span>

      {mylist2.length > 0 ? (

        <div className='mylist-picked'>

          <div className="results3">
            {mylist2.map((movie, i) => (
              

                <Poster2 movie={movie} key={i} type="mylist" />
              
            ))}


          </div>
          <div>
          </div>

        </div>
      ) : (
        <h2></h2>
      )}

      

    </div>

  )
}
