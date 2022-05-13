import React, { useContext } from 'react';
import { GlobalContext } from '../../state/GlobalState';
import '../Rows/Row.css';
import Card7 from '../Cards/Card7';
import { Tooltip, OverlayTrigger } from 'react-bootstrap';

export const Poster2 = ({ movie }) => {

    const {
        removingfromMyList2,
    } = useContext(GlobalContext);


    const renderTooltip = (props) => (
        <Tooltip className="button-tooltip" {...props}>
            <p>{`${movie.name}`}</p>
            
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

                            <Card7 arg={movie} />
                        ) : (
                            <div className="filler-poster" />
                        )}
                    </div>
            
                </OverlayTrigger>

                <>
                    <div className='extra-btn'>
                        <button className="btn" onClick={() => removingfromMyList2(movie.id)}>
                            <i className="<fa-fw fa fa-close"></i>
                        </button>
                    </div>
                </>
            </div>
        </>    
  )
}

export default Poster2;
