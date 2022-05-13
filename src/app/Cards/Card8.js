import React from 'react';
import "../Rows/Row.css";
import '../Searches/Search.css';
import {
    Link,
} from "react-router-dom";
import { Tooltip, OverlayTrigger } from 'react-bootstrap';
import catalogue from '../../catalogue';

export const Card8 = (movie) => {

    const arg = movie.arg;
    const link = '/tv/' + arg.id;

    const date_check = arg?.first_air_date == null ? ("n/a") : (arg.first_air_date.slice(0, 4));

    const renderTooltip = (props) => (
        <Tooltip className="button-tooltip-layout" {...props}>
            <p>{`${arg.name}` + ` (${date_check})`}</p>

        </Tooltip>
    );


    return (

        <>
                
                    
            <Link to={link} onClick={window.location.reload} style={{ textDecoration: 'none' }}>

            <OverlayTrigger
                placement="top"
                delay={{ show: 125, hide: 400 }}
                    overlay={renderTooltip}>
                    
                    <div className='bigger'>

                        <div className='organize-search'>
                            <div className='shadow'></div>

                            <img className="post_custom" src={`${catalogue.fetchImage}${arg.poster_path}`} />
                        </div>
                    
                    
                    </div></OverlayTrigger>

            </Link>
            
        </>       
    )
}

export default Card8;