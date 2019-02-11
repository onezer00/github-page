import React, { Component } from 'react';
import './App.css';
import Routes from './routes';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <p>Dans composant App</p>
        </header>
        <Routes />
      </div>
    );
  }
}

export default App;
