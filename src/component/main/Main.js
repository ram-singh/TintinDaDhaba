import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../home/Home';
import Contact from '../contact/Contact';
import './Main.css';

class Main extends Component {
  render() {
    return (
        <main>
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route path='/home' component={Home}/>
                <Route path='/contact' component={Contact}/>
            </Switch>
        </main>
    );
  }
}

export default Main;