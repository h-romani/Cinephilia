import React from 'react';
import { DropdownButton, Dropdown, } from 'react-bootstrap';
import {
    Link,
} from "react-router-dom";


export const DropDown2 = () => {
    return (
        <DropdownButton className="dropdown-basic-button" title="Genres">
            <Dropdown.Item as={Link} to="/layout_crime_series" onClick={() => { window.location.href = "/layout_crime_series" }}>Crime</Dropdown.Item>
            <Dropdown.Item as={Link} to="/layout_comedy_series" onClick={() => { window.location.href = "/layout_comedy_series" }}>Comedy</Dropdown.Item>
            <Dropdown.Item as={Link} to="/layout_drama_series" onClick={() => { window.location.href = "/layout_drama_series" }}>Drama</Dropdown.Item>
            <Dropdown.Item as={Link} to="/layout_science_fiction_series" onClick={() => { window.location.href = "/layout_science_fiction_series" }}>Science Fiction</Dropdown.Item>
            <Dropdown.Item as={Link} to="/layout_mystery_series" onClick={() => { window.location.href = "/layout_mystery_series" }}>Mystery</Dropdown.Item>
            <Dropdown.Item as={Link} to="/layout_action_series" onClick={() => { window.location.href = "/layout_action_series" }}>Action</Dropdown.Item>
            <Dropdown.Item as={Link} to="/layout_mystery_series" onClick={() => { window.location.href = "/layout_mystery_series" }}>Mystery</Dropdown.Item>
            <Dropdown.Item as={Link} to="/layout_action" onClick={() => { window.location.href = "/layout_action" }}>Action</Dropdown.Item>
            <Dropdown.Item as={Link} to="/layout_doc_series" onClick={() => { window.location.href = "/layout_doc_series" }}>Documentaries</Dropdown.Item>
            <Dropdown.Item as={Link} to="/layout_family_series" onClick={() => { window.location.href = "/layout_family_series" }}>Family</Dropdown.Item>
            <Dropdown.Item as={Link} to="/layout_war_politics_series" onClick={() => { window.location.href = "/layout_war_politics_series" }}>War & Politics</Dropdown.Item>
            <Dropdown.Item as={Link} to="/layout_reality_series" onClick={() => { window.location.href = "/layout_reality_series" }}>Reality TV</Dropdown.Item>
            <Dropdown.Item as={Link} to="/layout_talk_series" onClick={() => { window.location.href = "/layout_talk_series" }}>Talk Shows</Dropdown.Item>
            <Dropdown.Item as={Link} to="/layout_western_series" onClick={() => { window.location.href = "/layout_western_series" }}>Western</Dropdown.Item>
        </DropdownButton>
    )
}

export default DropDown2;