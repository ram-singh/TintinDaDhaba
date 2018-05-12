import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../home/Home';
import './Main.css';

class Main extends Component {
  render() {
    return (
        <main>
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route path='/home' component={Home}/>
            </Switch>
        </main>
    );
  }
}

export default Main;