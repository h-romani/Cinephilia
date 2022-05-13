import React from 'react';
import './App.css';
import { GlobalProvider } from './state/GlobalState';
import "./lib/font-awesome/css/all.min.css";
import Navigate from "./app/Navigation/Navigate";


function App() {
  return (
    <GlobalProvider>
      <div className="app">
        
        <Navigate />
        
      </div>
    </GlobalProvider>
  );
}

export default App;
