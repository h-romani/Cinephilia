import React from 'react';
import "../Rows/Row.css";
import {
    Link,
} from "react-router-dom";
import catalogue from '../../catalogue';

export const Card6 = (tv) => {

    const arg = tv.arg;
    const link = '/tv/' + arg.id;


    return (

        <>
            <Link to={link} onClick={window.location.reload} style={{ textDecoration: 'none' }}>

                <img className="post_custom" src={`${catalogue.fetchImage}${arg.poster_path}`} />
                
                <div className='jo'>
                    <p>{`${arg.title || arg.name}`}</p>
                </div>
            
            </Link>
            
        </>       
    )
}

export default Card6;