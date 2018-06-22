import React, { Component } from 'react';
import { fetchHeader } from '../../model/header';
import './Header.css';

class Header extends Component {
  constructor() {
    super();
    this.state = { logo: "", title: "", dhabaimages: []}
  }
  render() {
    // let dhabaPics = <img src={this.state.logo}  alt="Dhaba Images" />;
    return (
      <div className="header">
        <div className="logo"><img src={this.state.logo}  alt="logo" /></div>
        <div className="dhabaPics">
            {this.state.dhabaimages.map(function(name, index){
                return <img src={'assets/images/' + name}  key={index} alt="Dhaba Images" />;
            })}
        </div>
        <div> <embed className="menu" src="assets/images/menu.pdf"/> </div>
        {/* <a href="/contact"><span>Contact Us</span></a> */}
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