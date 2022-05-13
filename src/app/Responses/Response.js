import React from 'react';
import '../Rows/Row.css'; 
import Card2 from '../Cards/Card2';
import { Tooltip, OverlayTrigger } from 'react-bootstrap';

export const Response = ({movie}) => {

  const renderTooltip = (props) => (
    <Tooltip className="button-tooltip" {...props}>
      <p>{`${movie.title || movie.name}` + ` (${movie.release_date.slice(0, 4) || movie.release_date.slice(0, 4) })`}</p>
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
        <Card2 arg={movie} />
            
        ) : (
          <div className="filler-poster"  />
      )}
            
      </div> 
    
      </div></OverlayTrigger>
    </>
    
  );
};

export default Response;