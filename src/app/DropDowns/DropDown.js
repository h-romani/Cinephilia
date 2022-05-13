import React from 'react';
import { DropdownButton, Dropdown, } from 'react-bootstrap';
import {
    Link,
} from "react-router-dom";


export const DropDown = () => {
  return (
      <DropdownButton className="dropdown-basic-button" title="Genres">
          <Dropdown.Item as={Link} to="/layout_crime" onClick={() => { window.location.href = "/layout_crime" }}>Crime</Dropdown.Item>
          <Dropdown.Item as={Link} to="/layout_comedy" onClick={() => { window.location.href = "/layout_comedy" }}>Comedy</Dropdown.Item>
          <Dropdown.Item as={Link} to="/layout_drama" onClick={() => { window.location.href = "/layout_drama" }}>Drama</Dropdown.Item>
          <Dropdown.Item as={Link} to="/layout_science_fiction" onClick={() => { window.location.href = "/layout_science_fiction" }}>Science Fiction</Dropdown.Item>
          <Dropdown.Item as={Link} to="/layout_thriller" onClick={() => { window.location.href = "/layout_thriller" }}>Thriller</Dropdown.Item>
          <Dropdown.Item as={Link} to="/layout_horror" onClick={() => { window.location.href = "/layout_horror" }}>Horror</Dropdown.Item>
          <Dropdown.Item as={Link} to="/layout_mystery" onClick={() => { window.location.href = "/layout_mystery" }}>Mystery</Dropdown.Item>
          <Dropdown.Item as={Link} to="/layout_action" onClick={() => { window.location.href = "/layout_action" }}>Action</Dropdown.Item>
          <Dropdown.Item as={Link} to="/layout_war" onClick={() => { window.location.href = "/layout_war" }}>War</Dropdown.Item>
          <Dropdown.Item as={Link} to="/layout_western" onClick={() => { window.location.href = "/layout_western" }}>Western</Dropdown.Item>
          <Dropdown.Item as={Link} to="/layout_romance" onClick={() => { window.location.href = "/layout_romance" }}>Romance</Dropdown.Item>
          <Dropdown.Item as={Link} to="/layout_fantasy" onClick={() => { window.location.href = "/layout_fantasy" }}>Fantasy</Dropdown.Item>
          <Dropdown.Item as={Link} to="/layout_doc" onClick={() => { window.location.href = "/layout_doc" }}>Documentaries</Dropdown.Item>


          <Dropdown.Item as={Link} to="/layout_universal" onClick={() => { window.location.href = "/layout_universal" }}>Universal Pictures</Dropdown.Item>
          <Dropdown.Item as={Link} to="/layout_warner" onClick={() => { window.location.href = "/layout_warner" }}>Warner Bros. Pictures</Dropdown.Item>
          <Dropdown.Item as={Link} to="/layout_columbia" onClick={() => { window.location.href = "/layout_columbia" }}>Columbia Pictures</Dropdown.Item>
          <Dropdown.Item as={Link} to="/layout_disney" onClick={() => { window.location.href = "/layout_disney" }}>Disney</Dropdown.Item>
          <Dropdown.Item as={Link} to="/layout_paramount" onClick={() => { window.location.href = "/layout_paramount" }}>Paramount Pictures</Dropdown.Item>
      </DropdownButton>
  )
}

export default DropDown;