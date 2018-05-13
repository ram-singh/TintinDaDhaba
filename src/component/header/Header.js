import React, { Component } from 'react';
import { fetchHeader } from '../../model/header';
import './Header.css';

class Header extends Component {
  constructor() {
    super();
    this.state = { logo: "", title: "" }
  }
  render() {
    return (
      <div className="header">
        <a href="/" className="logo"><img src={this.state.logo} className="logo" alt="logo" /></a>
        <a href="/contact"><span>Contact Us</span></a>
      </div>
    );
  }
  componentDidMount() {
    let Promise = fetchHeader();
    Promise.then(data => {
      this.setState(data);
    });
  }
}

export default Header;