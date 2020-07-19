import React, { Component } from 'react';
import FullProject from './components/FullProject/FullProject';
import Projects from './components/Projects/Projects';
import { Route, Redirect, Switch } from 'react-router-dom';
import './bootstrap-grid.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path="/projects" exact component={Projects} />
          <Route path={'/projects/:name/:id'} exact component={FullProject} />
          <Redirect from="/" to="/projects" />
        </Switch>
      </div>
    );
  }
}

export default App;
