import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import DetailPage from './components/DetailPage';
import Pokemon from './Pokemon';

import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink
} from 'react-router-dom'
import Homepage from './components/Homepage';

export default class App extends Component {
  render() {
    return (
      <div>
          <Header/>
          <Router>
            <nav>
              <li><NavLink exact to='/'>Home</NavLink></li>
              <li><NavLink exact to='/pokemon'>List</NavLink></li>
            </nav>

          <Switch>
            <Route
              path="/pokemon"
              exact
              component={Pokemon} 
            />

            <Route
              path="/pokemon/:pokemonId"
              exact
              component={DetailPage} 
            />

            <Route
              path="/"
              exact
              component={Homepage} 
            />
          </Switch>
          </Router>
      </div>
    )
  }
}
