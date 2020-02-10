import React, { Component } from 'react';
import Navbar from './components/layout/Navbar'; 
import Dashboard from './components/dashboard/DashBoard'

// For client side routing
import { BrowserRouter, Switch, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar/>
          <Switch>
            <Route path='/' component={Dashboard} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
