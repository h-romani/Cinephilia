import React, { useState, useEffect } from 'react';
import axios from '../../axios';
import "../Rows/Row.css";
import Card from '../Cards/Card';

const img_url = `https://www.themoviedb.org/t/p/original/`;
const API_KEY = "e32f13651196ec17089277883e4ebede";

// import { id } from '../info/Info';

export const Similar = ({ movie }) => {

    

    const [movies, setMovies] = useState([]);

    

    useEffect(() => {

        async function fetchSimilar() {

            const request = await axios.get(`/movie/${movie.id}/similar?api_key=${API_KEY}&page=1`);
            setMovies(request.data.results.slice(0,7));
        }

        fetchSimilar();

    }, []);

  return (
      <>
        
        <div className="row">
            <div className="row_posters2">

                {movies.map((movie,i) => {
                    return <Card key={i} arg={movie} />
                })}

              </div>
        </div>
        
    </>
  )
}

export default Similar;