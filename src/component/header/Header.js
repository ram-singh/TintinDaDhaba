import React, { Component } from 'react';
import './Header.css';
// import {fetchHeader} from '../../model/header';

class Header extends Component {
  constructor(){
    super();
    this.state = {
            logo: "",
            title:""
    }
  }
  render() {
    return (
        <div className="header">
          <img src={this.state.logo} className="logo" alt="menu" />
          <h1 className="title">{this.state.title}</h1>
        </div>
    );
  }
  componentDidMount(){
    this.fetchHeader();
  }
  fetchHeader = async() => {
    try{
        const url = 'assets/db/header.json';
        let response =  await fetch(url);
        console.log("response : ",response);
        let header = await response.json();
        this.setState(header);
    } catch(err){
        alert(err);
    }
}
}

export default Header;