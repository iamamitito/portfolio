import React, { useState, Fragment } from 'react';
import FullProject from './components/FullProject/FullProject';
import Projects from './components/Projects/Projects';
import Sidebar from './components/Sidebar/Sidebar';
import { Route, Redirect } from 'react-router-dom';
import './bootstrap-grid.css';
import './App.css';
import Footer from './components/Footer/Footer';

const App = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const showSidebarHandler = () => {
    setShowSidebar(!showSidebar);
  }

  return (
    <Fragment>
      <div className="App container">
        <Sidebar show={showSidebar}
          clicked={showSidebarHandler} />
        <Route path="/portfolio" exact component={Projects} />
        <Route path="/portfolio/:id" exact component={FullProject} />
        <Redirect from="/" to="/portfolio" />
      </div>
      <Footer />
    </Fragment>
  );
}

export default App;
