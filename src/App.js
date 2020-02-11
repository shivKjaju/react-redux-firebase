import React, { Component } from 'react';
import Navbar from './components/layout/Navbar'; 
import Dashboard from './components/dashboard/DashBoard'
import ProjectDetails from './components/projects/ProjectDetails'

// For client side routing
import { BrowserRouter, Switch, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar/>
          <Switch>
            <Route exact path='/' component={Dashboard} />
            <Route path='/project/:id' component={ProjectDetails}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
