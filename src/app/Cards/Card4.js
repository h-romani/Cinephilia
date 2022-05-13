import React from 'react';
import "../Rows/Row.css";
import catalogue from '../../catalogue';
import noimage from '../../img/noimage.png';

export const Card4 = (movie) => {

    const arg = movie.arg;

    const role = arg.character;

    return (

        <>
            <div style={{ textDecoration: 'none' }}>
                    
                {arg.profile_path ? (

                    <img className="post_custom_cast" src={`${catalogue.fetchImage}${arg.profile_path}`} />
                ) : (
                    <img className="post_custom_cast" src={`${noimage}`} />
                )}
        

            <>
                <p>{`${arg.original_name} `}</p>
            </>
                


            <p><span>{role}</span></p>


            </div>
        </>       
    )
}

export default Card4;