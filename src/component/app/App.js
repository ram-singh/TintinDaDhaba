import React, { Component } from 'react';
import Header from '../header/Header';
import Main from '../main/Main';
import './App.css';

class App extends Component {
  render() {
    return (
            <div className="App">
              <Header></Header>
              <Main></Main>
            </div>
    );
  }
}

export default App;
