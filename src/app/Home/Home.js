
import React from 'react'
import Search from '../Searches/Search';
import Row from '../Rows/Row';
import catalogue from '../../catalogue';
import "../Rows/Row.css"

export const Home = () => {
  return (
    <>
      <Search />

      <div className='display'>
        
        <Row title="Coming Soon" fetchUrl={catalogue.fetchComingSoon} />
        <Row title="Now Playing" fetchUrl={catalogue.fetchNowPlaying} />
        <Row title="Top Rated Movies" fetchUrl={catalogue.fetchTopRated} />
        <Row title="Hollywood Classics" fetchUrl={catalogue.fetchOldies} />
        <Row title="Disney Favourites" fetchUrl={catalogue.fetchDisney} />
      </div>

      
    </>

  )
}