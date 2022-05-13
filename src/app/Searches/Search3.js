import React, { useState } from 'react';
import '../Searches/Search.css';
import { Response3 } from '../Responses/Response3';

const API_KEY = "e32f13651196ec17089277883e4ebede";

export const Search3 = () => {

  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]); 

  const onChange = e => {

    e.preventDefault();
    setQuery(e.target.value);

    fetch(
      `https://api.themoviedb.org/3/search/tv?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${e.target.value}`
    )
    
      .then(res => res.json())
      .then((data) => {
       // console.log(data);
        if (!data.errors) {
          console.log(data.results);
          setResults(data.results); 
        } else {
          setResults([]);
        }
      });
  };

  return (
      <div className="wrapper">
        <div className="searchBar">
            <input id="searchQueryInput" type="text" name="searchQueryInput" placeholder="Search for series, shows, documentaries relating to all genres" value={query} onChange={onChange} />
        <button id="searchQuerySubmit" type="submit" name="searchQuerySubmit" ><img src="./img/search.svg" /></button>
        </div>
          {results.length > 0 && (
            <div className='results'>
              {results.map(movie => (
                <li key={movie.id}>
                  <Response3 movie={movie} />
                </li>
              ))}
            </div>
          )}
        </div>
  );




};

export default Search3;