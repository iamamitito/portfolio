import React, { Component } from 'react';
import FullProject from './components/FullProject/FullProject';
import Projects from './components/Projects/Projects';
import { Route, Switch } from 'react-router-dom';
import './bootstrap-grid.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App container">
        <h3><i className="fas fa-code fa-2x"></i> Héctor Espinoza</h3>
        <Switch>
          <Route path="/" exact component={Projects} />
          <Route path={'/:name/:id'} exact component={FullProject} />

        </Switch>
      </div>
    );
  }
}

export default App;
