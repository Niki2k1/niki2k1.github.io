import React from 'react';
import './App.css';

import Home from './Routes/Home';
import ProjectPage from './Routes/ProjectPage';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/projects/:project">
          <ProjectPage/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
