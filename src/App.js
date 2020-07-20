import React, { Component } from 'react';
import FullProject from './components/FullProject/FullProject';
import Projects from './components/Projects/Projects';
import Sidebar from './components/Sidebar/Sidebar';
import { Route, Switch } from 'react-router-dom';
import './bootstrap-grid.css';
import './App.css';

class App extends Component {
  state = {
    showSidebar: false
  }
  showSidebarHandler = () => {
    this.setState({ showSidebar: !this.state.showSidebar })
  }
  render() {
    return (
      <div className="App container">

        <Sidebar show={this.state.showSidebar}
          clicked={this.showSidebarHandler} />

        <h3><i className="fas fa-robot fa-2x"></i> Héctor Espinoza</h3>
        <Switch>
          <Route path="/" exact component={Projects} />
          <Route path={'/:id'} exact component={FullProject} />
        </Switch>
      </div>
    );
  }
}

export default App;
