import React, { useState, useEffect } from 'react';
import './Video.css';
import axios from '../../axios';
import { Modal } from 'react-bootstrap';

const API_KEY = "e32f13651196ec17089277883e4ebede";

export const Video2 = (props, movie) => {
    
    const [id, setId] = useState([]); // displays the blank state of the video

    const [site, setSite] = useState([]); // displays the blank state of the video


    const date_check = props.movie?.first_air_date == null ? ("n/a") : (props.movie.first_air_date.slice(0, 4));

    useEffect(() => {

        async function fetchVideo() {

            const request = await axios.get(`/tv/${props.movie.id}/videos?api_key=${API_KEY}`);

            // console.log(getYouTubeID(request.data.results[0].key));

            const num = (request.data.results.length > 1 && request.data.results.length < request.data.results.length + 1) ? Math.floor(Math.random() * (3 - 0) + 0) : 0; // 0 and 3

            // console.log(request.data.results.length > 1 && request.data.results.length < request.data.results.length + 1 );

            setId(request.data.results[num].key);
            setSite(request.data.results[num].site);

        }

        fetchVideo();

    }, []);

    function doesExist() {

        if (site === "YouTube") {
            return `https://www.youtube-nocookie.com/embed/${id}`; 
        }

        if(site === "Vimeo") {
            return `https://player.vimeo.com/video/${id}`;
        }
    }

    

    return (
        <>
            <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" className="video-modal" centered>


                <Modal.Header closeButton>
                    <Modal.Title className="contained-modal-title-vcenter">
                        <h2>{props.movie.name + ` (${date_check})`  }</h2>
                    </Modal.Title>

                    <button className='btn' onClick={props.onHide}><i className="fa fa-times"></i></button>
                    
                </Modal.Header>

                <Modal.Body>

                    
                    <iframe
                        width="759"
                        height="500"
                        src={doesExist()}
                        frameBorder="0"
                        allowFullScreen
                    />
                    

                </Modal.Body>
            </Modal>
        </>
    )
}


export default Video2;