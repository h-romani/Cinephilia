import React, { useEffect, useState } from 'react'
import {
  useParams,
} from "react-router";
import './info.css';
import '../app/Rows/Row.css';
import Similar from '../app/Similar/Similar';
import axios from '../axios';
import Click from './Click';
import Video from '../app/Videos/Video';
import Cast from '../app/Casts/Cast';
import emptybg from '../img/emptybg.jpg';
import emptypost from '../img/emptypost.jpg';

const img_url = `https://www.themoviedb.org/t/p/original/`;
const API_KEY = "e32f13651196ec17089277883e4ebede";


export const Info = () => {

  const { id } = useParams();

  const [modalShow, setModalShow] = useState(false);
  const [modalShow2, setModalShow2] = useState(false);

  const [item, setItem] = useState(null);

  useEffect(() => {

    const getDetail = async () => {
      
      const response = await axios.get(`/movie/${id}?api_key=${API_KEY}`);

      setItem(response.data);

      // console.log(response.data);
      
    }

    getDetail();

  }, [id]);

  

  return (
    <>
    
      {item && (


        <>
          
          <div className='backdrop-div'>

              {item.backdrop_path || item.poster_path ? (
                <img className='backdrop-resize' src={`${img_url}${item.backdrop_path || item.poster_path}`} />
              ) : (
                <img className='backdrop-resize' src={`${emptybg}`} />
              )}
            
            <div className='backdrop-overlay'></div>
          </div>
          
          <div className="row container-fluid">
            <div className="post-div col-lg-6 img-responsive center-block d-block mx-auto ">
              {item.poster_path ? (

                <img className="post_custom2" src={`${img_url}${item.poster_path}`} />) : (
                <img className='post_custom2' src={`${emptypost}`} />)}
            </div>

            <div className="col-lg-6 title-div">
              <h3>{item.title + ` (${item.release_date.slice(0, 4)})`}</h3>
              <h4><span className='span-average'>{item.vote_average}</span><span>/10</span>{item.genres.slice(0, 2).map((genre, i) => (
                <span key={i} className="split">{genre.name}</span>))}
              </h4>
              <h4 className='overview-div'>{item.overview}</h4>
            </div>
          </div>



          
          <div className='list-video-cast-div'>


            <div className="row">
              <div className="col-4 col-md-12">
                <Click movie={item} />
              </div>

              <div className="col-4 col-md-12">
                <button className='btn' onClick={() => setModalShow(true)}>
                  View Trailer
                </button>
              </div>

              <div className="col-4 col-md-12">
                <button className='btn' onClick={() => setModalShow2(true)}>
                  View Cast
                </button>
              </div>
            </div>

          </div>



            <Video
              movie={item}
              show={modalShow}
              onHide={() => setModalShow(false)} />
        
          
          <div className='backdrop-div'>
            <Cast movie={item}
              show={modalShow2}
              onHide={() => setModalShow2(false)} />
          </div>


          <div className='backdrop-div'>
            <div className='similar-header'>
              <h2 className='similar-title'>{`Similar to ${item.title || item.name}`}</h2>
              <Similar movie={item} />

            </div>

          </div>         

        </>
        
        )}




      </>
  )

}

export default Info;