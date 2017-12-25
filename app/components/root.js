import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {connect} from 'react-redux';
import Nav from './nav';
import Homepage from './homepage';


export default class Root extends Component {
  
render() {
    
    return (
      <Router>
          <div>
            <div>
                <Nav /> {/* Here is the NavBar*/}
            </div>
            <div>
              <h1>AutoWhat</h1>
                <Switch>
                  <Route exact path = "/" component = {Homepage}/>
                    {/* Here is RouterTown*/}
                </Switch>
            </div>
          </div>
      </Router>
    )
  }
}



