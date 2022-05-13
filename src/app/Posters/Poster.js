import React, { useContext } from 'react';
import { GlobalContext } from '../../state/GlobalState';
import '../Rows/Row.css';
import Card2 from '../Cards/Card2';
import { Tooltip, OverlayTrigger } from 'react-bootstrap';

export const Poster = ({ movie }) => {
    const {
        removingfromMyList,
    } = useContext(GlobalContext);

    const renderTooltip = (props) => (
        <Tooltip className="button-tooltip" {...props}>
            <p>{`${movie.title}`}</p>
            
        </Tooltip>
    );

    return (
        <>
            
            <div className='bigger'>
                
                <OverlayTrigger
                    placement="top"
                    delay={{ show: 125, hide: 400 }}
                    overlay={renderTooltip}>

                    <div className='organize-search'>
                        <div className='shadow'></div>
                        {movie.poster_path ? (

                            <Card2 arg={movie} />
                        ) : (
                            <div className="filler-poster" />
                        )}

                    </div>
                
                </OverlayTrigger>

                <>
                    <div className='extra-btn'>
                        <button className="btn" onClick={() => removingfromMyList(movie.id)}>
                            <i className="<fa-fw fa fa-close"></i>
                        </button>
                    </div>
                </>

            </div>
        </>    
  )
}

export default Poster;
