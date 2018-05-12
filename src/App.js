import React, { Component } from 'react';
import logo from './logo.jpg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="menu" />
          <h1 className="App-title">Welcome to Tintin Da Dhaba</h1>
        </header>
        <p className="App-intro">
          Site is under construction.....
        </p>
      </div>
    );
  }
}

export default App;
