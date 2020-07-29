import React, { useState } from 'react';
import FullProject from './components/FullProject/FullProject';
import Projects from './components/Projects/Projects';
import Sidebar from './components/Sidebar/Sidebar';
import { Route, Redirect, Link } from 'react-router-dom';
import './bootstrap-grid.css';
import './App.css';
import Footer from './components/Footer/Footer';

const App = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const showSidebarHandler = () => {
    setShowSidebar(!showSidebar);
  }

  return (
    <React.Fragment>
      <div className="App container">
        <Sidebar show={showSidebar}
          clicked={showSidebarHandler} />
        <h3><Link to="/portfolio"><i className="fas fa-home fa-2x"></i></Link> <i className="fas fa-grip-lines-vertical"></i> Héctor Espinoza</h3>
        <Route path="/portfolio" exact component={Projects} />
        <Route path="/portfolio/:id" exact component={FullProject} />
        <Redirect from="/" to="/portfolio" />
      </div>
      <Footer />
    </React.Fragment>
  );
}

export default App;
