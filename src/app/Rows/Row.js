import React, { useState, useEffect } from 'react';
import axios from '../../axios';
import "./Row.css"
import Card from '../Cards/Card';

function Row({ title, fetchUrl }) {
  
  const [movies, setMovies] = useState([]);

  useEffect(() => {

    async function fetchData() {

      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);

     
    }

    fetchData();
    
  }, [fetchUrl]);

  

    return (
    
      <div className="row">

        <h2>{title}</h2>

        <div className="row_posters">

          {movies.map((movie,i) => {
            
            return <Card key={i} arg={movie}/>
         
          })}

        </div>
      </div> 
    );
  
  
}

export default Row;