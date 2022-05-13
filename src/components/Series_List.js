
import React from 'react'
import catalogue from '../catalogue';
import Row2 from '../app/Rows/Row2';
import "../app/Rows/Row.css"
import "../app/Recommendations/Recommend2"
import Recommend2 from '../app/Recommendations/Recommend2';
import Search3 from '../app/Searches/Search3';
import { DropdownButton, Dropdown, } from 'react-bootstrap'
import {
  Link,
} from "react-router-dom";

export const Series_List = () => {
  return (

    <>
      <div className='temp'>

        <div className='movies-page-title'>
        <h2>Series</h2>
        </div>

        <DropdownButton className="dropdown-basic-button" title="Genres">

          <Dropdown.Item as={Link} to="/layout_crime_series">Crime</Dropdown.Item>
          <Dropdown.Item as={Link} to="/layout_comedy_series">Comedy</Dropdown.Item>
          <Dropdown.Item as={Link} to="/layout_drama_series">Drama</Dropdown.Item>
          <Dropdown.Item as={Link} to="/layout_science_fiction_series">Science Fiction</Dropdown.Item>
          <Dropdown.Item as={Link} to="/layout_mystery_series">Mystery</Dropdown.Item>
          <Dropdown.Item as={Link} to="/layout_action_series">Action</Dropdown.Item>
          <Dropdown.Item as={Link} to="/layout_doc_series">Documentaries</Dropdown.Item>
          <Dropdown.Item as={Link} to="/layout_family_series">Family</Dropdown.Item>
          <Dropdown.Item as={Link} to="/layout_war_politics_series">War & Politics</Dropdown.Item>
          <Dropdown.Item as={Link} to="/layout_reality_series">Reality TV</Dropdown.Item>
          <Dropdown.Item as={Link} to="/layout_talk_series">Talk Shows</Dropdown.Item>
          <Dropdown.Item as={Link} to="/layout_western_series">Western</Dropdown.Item>

        </DropdownButton>

      </div>

      <Search3 />

      <Recommend2 title="Because you added" />
      <Row2 title="Popular & Bingeworthy" fetchUrl={catalogue.fetchPopularSeries} />
      <Row2 title="Crime" fetchUrl={catalogue.fetchCrimeSeries} />
      <Row2 title="Mix & Match" fetchUrl={catalogue.fetchMixSeries} />
      <Row2 title="Drama" fetchUrl={catalogue.fetchDramaSeries} />
      <Row2 title="Mystery" fetchUrl={catalogue.fetchMysterySeries} />
      <Row2 title="Science Fiction" fetchUrl={catalogue.fetchSciSeries} />
      <Row2 title="Comedy" fetchUrl={catalogue.fetchComedySeries} />
      <Row2 title="Reality" fetchUrl={catalogue.fetchRealitySeries} />
      <Row2 title="Western" fetchUrl={catalogue.fetchWesternSeries} />
    
    
    </>

  )
}