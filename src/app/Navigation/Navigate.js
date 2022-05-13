import React, { Component } from 'react'
import { Navbar, Nav, Container, } from 'react-bootstrap'
import logo from '../../img/logo.png';
import {
  Route,
  Link,
  Routes,
  BrowserRouter
} from "react-router-dom";
import { Movie_List } from '../../components/Movie_List';
import { Series_List } from '../../components/Series_List';
import { My_List } from '../../components/My_List';
import { My_Account } from '../../components/My_Account';
import { Home } from '../Home/Home';
import './Navigate.css';
import Info from '../../info/Info';
import Info2 from '../../info/Info2';
import Layout from '../Layouts/Layout';
import Layout2 from '../Layouts/Layout2';
import Layout3 from '../Layouts/Layout3';


export default class Navigate extends Component {
  render() {
    return (

      <BrowserRouter>
      <><div>
          <Navbar bg="light" expand="lg">
            <Container>
            <Link to="/">
                <img src={logo} alt="" className="logo-img" width="127px" height="118px"></img>
            </Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                
                <Nav.Link as={Link} to="/movies">Movies</Nav.Link>
                <Nav.Link as={Link} to="/series">Series</Nav.Link>
                <Nav.Link as={Link} to="/list">My List</Nav.Link>
                <Nav.Link as={Link} to="/account">My Account</Nav.Link>
                
                {/* <Nav.Link as={Link} to="/layout">Temp</Nav.Link> */}
                  
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <Routes>

            <Route  path="/movies" element={<Movie_List />} />
            <Route path="/list" element={<My_List />} />
            <Route path="/account" element={<My_Account />} />
            <Route path="/series" element={<Series_List/>} /> 
            <Route path="/layout_crime" element={<Layout title="Crime" genre="80" />} />
            <Route path="/layout_comedy" element={<Layout title="Comedy" genre="35" />} />
            <Route path="/layout_drama" element={<Layout title="Drama" genre="18" />} />
            <Route path="/layout_science_fiction" element={<Layout title="Science Fiction" genre="878" />} />
            <Route path="/layout_thriller" element={<Layout title="Thriller" genre="53" />} />
            <Route path="/layout_horror" element={<Layout title="Horror" genre="27" />} />
            <Route path="/layout_mystery" element={<Layout title="Mystery" genre="9648" />} />
            <Route path="/layout_action" element={<Layout title="Action" genre="28" />} />
            <Route path="/layout_war" element={<Layout title="War" genre="10752" />} />
            <Route path="/layout_western" element={<Layout title="Western" genre="37" />} />
            <Route path="/layout_romance" element={<Layout title="Romance" genre="10749" />} />
            <Route path="/layout_fantasy" element={<Layout title="Fantasy" genre="14" />} />
            <Route path="/layout_doc" element={<Layout title="Documentaries" genre="99" />} />
    
            
            <Route path="/layout_universal" element={<Layout2 title="Best of Universal Pictures" company="33" />} />
            <Route path="/layout_warner" element={<Layout2 title="Best of Warner Bros. Pictures" company="174" />} />
            <Route path="/layout_columbia" element={<Layout2 title="Best of Columbia Pictures" company="5" />} />
            <Route path="/layout_disney" element={<Layout2 title="Best of Disney" company="2" />} />
            <Route path="/layout_paramount" element={<Layout2 title="Best of Paramount Pictures" company="4" />} />


            <Route path="/layout_crime_series" element={<Layout3 title="Crime" genre="80" />} />
            <Route path="/layout_comedy_series" element={<Layout3 title="Comedy" genre="35" />} />
            <Route path="/layout_drama_series" element={<Layout3 title="Drama" genre="18" />} />
            <Route path="/layout_science_fiction_series" element={<Layout3 title="Science Fiction" genre="10765" />} />
            <Route path="/layout_mystery_series" element={<Layout3 title="Mystery" genre="9648" />} />

            <Route path="/layout_action_series" element={<Layout3 title="Action" genre="10759" />} />
            <Route path="/layout_doc_series" element={<Layout3 title="Documentaries" genre="99" />} />
            <Route path="/layout_family_series" element={<Layout3 title="Family" genre="10751" />} />
            <Route path="/layout_war" element={<Layout3 title="War" genre="" />} />
            <Route path="/layout_war_politics_series" element={<Layout3 title="War & Politics" genre="10768" />} />

            <Route path="/layout_reality_series" element={<Layout3 title="Reality TV" genre="10764" />} />
            <Route path="/layout_talk_series" element={<Layout3 title="Talk Shows" genre="10767" />} />
            <Route path="/layout_western_series" element={<Layout3 title="Western" genre="37" />} />
            




          <Route exact path='/' element={<Home />} /> 
            <Route path='/movie/:id' element={<Info />} />
            <Route path='/tv/:id' element={<Info2 />} />
            

        </Routes>

      </div></>
      </BrowserRouter>
    )
  }
}
