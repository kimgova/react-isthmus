import React, { useState, useEffect } from 'react';
import './App.css';
import Games from './Games/Games';
import About from './About/About';
import {HashRouter as Router2,
        BrowserRouter as Router,
        Switch,
        Route,
        NavLink} from 'react-router-dom';


function App() {

  return (
    <Router>
      <div className="App">
        <h1>Isthmus React Gamestore</h1>
        <nav>
          <NavLink to="/" exact activeClassName="selected">Home</NavLink>
          <NavLink to="/games" activeClassName="selected">Games</NavLink>
          <NavLink to="/about" activeClassName="selected">About</NavLink>
        </nav>
        <Switch>
          <Route path="/about">
            <About/>
          </Route>

          <Route path="/games">
            <Games/>
          </Route>

          <Route exact path="/">
            HOME SCREEN
          </Route>

          <Route exact path="">
            DEFAULT
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
