import React, { useState, useEffect, useRef } from 'react';
import '../Videos/Video.css';
import axios from '../../axios';
import Card4 from '../Cards/Card4';
import { Modal } from 'react-bootstrap';
import "../Rows/Row.css";

const API_KEY = "e32f13651196ec17089277883e4ebede";

export const Cast2 = (props) => {

    const [movies, setMovies] = useState([]);

    useEffect(() => {

        async function fetchCast() {

            const request = await axios.get(`/tv/${props.movie.id}/credits?api_key=${API_KEY}`);
            setMovies(request.data.cast);

        }

        fetchCast();

    }, []);

    

    return (
        <>
            <Modal {...props} size="lg" className="cast-modal">


                <Modal.Header closeButton>
                    <Modal.Title className="contained-modal-title-vcenter">
                        <h2>{props.movie.name + " Cast Preview"}</h2>
                    </Modal.Title>

                    <button className='btn' onClick={props.onHide}><i className="fa fa-times"></i></button>

                </Modal.Header>


                <Modal.Body>

                    <div className="row_cast">
                        
                        {movies.map((movie, i) => {
                            
                            return <Card4 key={i} arg={movie} />
                        })}
                        
                    </div>

                </Modal.Body>
            </Modal>
        </>
    )
}


export default Cast2;


