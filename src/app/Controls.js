import React, { useContext } from 'react';

import { GlobalContext } from "../state/GlobalState";

export const Controls = ({ movie, type }) => {
    
    const {
        addingtoMyList,
    } = useContext(GlobalContext);

    return (
        <div className='overLay-overRow'>
            {type === "mylist" && (
                <>
                    <button className='b-control' onClick={() => addingtoMyList(movie)}>
                        <i className='fa fa-plus'>
                        </i>
                    </button>
                </>
            )}
        </div>
    )
}