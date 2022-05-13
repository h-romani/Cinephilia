import React from 'react';
import '../Rows/Row.css'; 
import Card7 from '../Cards/Card7';
import { Tooltip, OverlayTrigger } from 'react-bootstrap';


export const Response3 = ({movie, type}) => {

  const date_check = movie?.first_air_date == null ? ("n/a") : (movie.first_air_date.slice(0, 4));

  const renderTooltip = (props) => (
    <Tooltip className="button-tooltip" {...props}>
      <p>{`${movie.title || movie.name}` + ` (${date_check})` }</p>
    </Tooltip>
  );

  return (

    <>
      <OverlayTrigger
      placement="top"
      delay={{ show: 200, hide: 400 }}
      overlay={renderTooltip}>

      <div className='bigger'>
      <div className='organize-search'>
      <div className='shadow'></div>
      {
        movie.poster_path ? (
        <Card7 arg={movie} />
            
        ) : (
          <div className="filler-poster"  />
      )}
            
      </div> 
    
      </div></OverlayTrigger>
    </>
    
  );
};

export default Response3;