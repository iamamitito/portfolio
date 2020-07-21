import React, { Component } from 'react';
import FullProject from './components/FullProject/FullProject';
import Projects from './components/Projects/Projects';
import Sidebar from './components/Sidebar/Sidebar';
import { Route, Redirect, Switch } from 'react-router-dom';
import './bootstrap-grid.css';
import './App.css';
import Footer from './components/Footer/Footer';

class App extends Component {
  state = {
    showSidebar: false
  }
  showSidebarHandler = () => {
    this.setState({ showSidebar: !this.state.showSidebar })
  }
  render() {
    return (
      <React.Fragment>
        <div className="App container">

          <Sidebar show={this.state.showSidebar}
            clicked={this.showSidebarHandler} />

          <h3><i className="fas fa-robot fa-2x"></i> Héctor Espinoza</h3>
          <Switch>
            <Route path="/portfolio" exact component={Projects} />
            <Route path={'/portfolio/:id'} exact component={FullProject} />
            <Redirect from="/" to="/portfolio" />
          </Switch>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
