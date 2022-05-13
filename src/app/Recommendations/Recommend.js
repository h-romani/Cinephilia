import React, { useContext, useEffect, useState } from 'react';
import { GlobalContext } from '../../state/GlobalState';
import axios from '../../axios';
import "../Rows/Row.css";
import Card from '../Cards/Card';

const API_KEY = "e32f13651196ec17089277883e4ebede";


export const Recommend = ({ title }) => {
    
    const [movies, setMovies] = useState([]);

    const {
        mylist,
    } = useContext(GlobalContext);


    useEffect(() => {

        async function fetchSimilar() {

            const request = await axios.get(`/movie/${mylist[0].id}/recommendations?api_key=${API_KEY}`);
            setMovies(request.data.results);
        }

        // console.log(Math.random(mylist.id));

        fetchSimilar();

    }, []);

    // randomize the list and get different recommendations below:

    // function shuffle(mylist) {
    //     mylist.sort(() => Math.random() - 0.5);
    // }

    // console.log(shuffle(mylist));

    return (
        <>
            {movies.length > 0 ? (
            

            <div className="row">
                <h2>{`${title} ${mylist[0].title}`}</h2>
                <div className="row_posters2">

                    {movies.map((mylist, i) => {
                        return <Card key={i} arg={mylist} />
                    })}

                </div>
            </div>
        ) : (
            <h2></h2>  
        )}

        </>
    )
}

export default Recommend;
