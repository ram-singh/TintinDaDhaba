import React, { Component } from 'react';
import logo from '../../images/logo.jpg';
import './Header.css';

class Header extends Component {
  render() {
    return (
        <div className="header">
          <img src={logo} className="logo" alt="menu" />
          <h1 className="title">Welcome to Tintin Da Dhaba</h1>
        </div>
    );
  }
}

export default Header;