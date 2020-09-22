import React from 'react';
import './App.css';


import { BrowserRouter as Router } from "react-router-dom";
import SalonNavigationBar  from './components/SalonNavigationBar';




function App() {
  return (
      <React.Fragment>
        <Router>
          <SalonNavigationBar />
        </Router>
      </React.Fragment>
  );
}

export default App;
