import React, { Component } from 'react';
import { fetchHeader } from '../../model/header';
import './Header.css';

class Header extends Component {
  constructor() {
    super();
    this.state = { logo: "", title: "", dhabaimages: []}
  }
  render() {
    return (
      <div className="header row">
        <div className="logo"><img className="col-xs-12" src={this.state.logo}  alt="logo" /></div>
        <div className="dhabaPics col-xs-12">
            {this.state.dhabaimages.map(function(name, index){
                return <img className="col-xs-4 col-sm-4 col-md-4" src={'assets/images/' + name}  key={index} alt="Dhaba Images" />;
            })}
        </div>
        <div> <embed className="menu col-md-12" src="assets/images/menu.pdf"/> </div>
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