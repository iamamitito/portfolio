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
          <Route path="/" exact component={Projects} />
          <Route path={'/:name/:id'} exact component={FullProject} />

        </Switch>
      </div>
    );
  }
}

export default App;
