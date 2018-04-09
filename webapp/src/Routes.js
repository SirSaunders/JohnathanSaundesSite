import React, { Component } from 'react';
import './App.css';
import HomePage from './components/pages/HomePage';
import { BrowserRouter as Router, Route,  } from 'react-router-dom';
import ResumePage from "./components/pages/Resume";
import Portfolio from "./components/pages/Portfolio";

class Routes extends Component {
  render() {
    return (
        <Router>
            <div>
                <Route exact path="/" component={HomePage}/>
                <Route path="/portfolio" component={Portfolio}/>
                <Route path="/resume" component={ResumePage}/>
                <Route path="/#contact" component={HomePage}/>
                <Route path="/#links" component={HomePage}/>
            </div>
        </Router>
    );
  }
}

export default Routes;
