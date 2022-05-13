import React, { useState } from 'react';
import './Search.css';
import { Response } from '../Responses/Response';
const API_KEY = "e32f13651196ec17089277883e4ebede";

export const Search = () => {

  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]); 

  let onChange = e => {

    e.preventDefault();
    setQuery(e.target.value);

    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${e.target.value}`
    )
      .then(res => res.json())
      .then((data) => {
       
        if (!data.errors) {
          setResults(data.results); 
        } else {
          setResults([]);
        }
      });
  };

  return (
    <div className="wrapper">
      <div className="searchBar">
        <input id="searchQueryInput" type="text" name="searchQueryInput" placeholder="Search for films, franchises, series, et cetera" value={query} onChange={onChange} />
        <button id="searchQuerySubmit" type="submit" name="searchQuerySubmit"  ><img src="./img/search.svg" /></button>
      </div>

      {
        results.length > 0 && (
          
        <div className='results'>
          
          {
            results.map(movie => (

              
              
              <li key={movie.id}>

                <Response movie={movie} />

              </li>

            ))
          }
          
          </div>
        )
      }

    </div>
  );
};

export default Search;