import React, { useState, useEffect} from 'react';
import axios from '../../axios';
import "./Row.css"

import Card6 from '../Cards/Card6';

function Row2({ title, fetchUrl }) {
  
  const [series, setSeries] = useState([]);

  useEffect(() => {

    async function fetchData() {

      const request = await axios.get(fetchUrl);
      setSeries(request.data.results);

      
    }

    fetchData();
    
  }, [fetchUrl]);

  

  return (
    
    
      <div className="row">

        <h2>{title}</h2>

        <div className="row_posters">

        {series.map((movie, i) => {
        
            
            
            return <Card6 key={i} arg={movie} />
         
          })}

          

        </div>
      </div> 

      
    );
  
  
}

export default Row2;