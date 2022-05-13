
import React from 'react'
import catalogue from '../catalogue';
import Row from '../app/Rows/Row';
import "../app/Rows/Row.css"
import Recommend from '../app/Recommendations/Recommend';
import Search2 from '../app/Searches/Search2';
import DropDown from '../app/DropDowns/DropDown';

export const Movie_List = () => {
  return (
    
    <>
    
      <div className='display'>

        <div className='temp'>

          <div className='movies-page-title'>
            <h2>Movies</h2>
          </div>
        

          <DropDown />
        </div>

        <Search2 />

        <Recommend title="Because you added" />

        <Row title="Crime" fetchUrl={catalogue.fetchCrime} />
        <Row title="Thriller" fetchUrl={catalogue.fetchThriller} />
        <Row title="Science Fiction" fetchUrl={catalogue.fetchSci} />
        <Row title="Comedy" fetchUrl={catalogue.fetchComedy} />
        <Row title="Western" fetchUrl={catalogue.fetchWest} />
        <Row title="Drama" fetchUrl={catalogue.fetchDrama} />
        <Row title="Horror" fetchUrl={catalogue.fetchHorror} />
        <Row title="Educational" fetchUrl={catalogue.fetchDoc} />
        <Row title="Free on Tubi Tv" fetchUrl={catalogue.fetchTubi} />

        
        
      </div>


      </>
    
  )
}
