import React from 'react';
import "../Rows/Row.css";
import catalogue from '../catalogue';

export const Card4 = (team) => {

    const arg = team.arg;
    const role = arg.job;

    return (

        <>
            <div style={{ textDecoration: 'none' }}>
                <img className="post_custom_cast" src={`${catalogue.fetchImage}${arg.profile_path}`} />

            <>
                <p>{`${arg.name} as `}<span>{role}</span></p>
            </>
                

                <p>
                    {`${arg.name}`}
                </p>

            </div>
        </>       
    )
}

export default Card4;