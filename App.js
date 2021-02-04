import React, { Component } from 'react';
import Dashboard from './modules/Dashboard/Dashboard';

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="jumbotron">
          <h1 >Take Away</h1>
          <p>All in One Food Delivery Website.</p>
        </div>
        <Dashboard />
      </div>
    );
  }
}

export default App;
