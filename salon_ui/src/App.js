import React from 'react';
import './App.css';
/*
import {BrowserRouter as Router, Route, Switch } from "react-router-dom";
*/
import {BrowserRouter as Router} from "react-router-dom";
import {Route} from "react-router-dom";
import {Switch } from "react-router-dom";


import {Row,Col,Container} from "react-bootstrap";


import SalonNavigationBar  from './components/SalonNavigationBar';
import ChooseService  from './components/ChooseService';
import ServiceRow from './components/ServiceRow';





function App()
{


    return (
        <Router>
            <SalonNavigationBar />
        <Switch>
            <Route exact path="/" component={ChooseService} />
        </Switch>
      </Router>



  );
}

export default App;
