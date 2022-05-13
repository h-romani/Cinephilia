import React from 'react';
import {
  Route,
  Link,
  Routes,
  BrowserRouter
} from "react-router-dom";

import Info from '../info/Info';

import { Home } from '../app/Home';

export const Router = () => {

  return (



    <BrowserRouter>
      <Routes >    
        
        {/* <Route exact path='/' element={<Home />} /> */}
        <Route   path='/movie/:id' element={<Info />} />
        
      </Routes>
    </BrowserRouter>
  )
}

export default Router;

//<Info movies={movie}