import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Header extends Component {
  render(){
    return(
      <div className="header">
        <div className="logo">
          <Link to="/"><h1><span>Austin</span>ited</h1></Link>
        </div>
        <div className="right-nav">
          <a href="https://www.instagram.com/austinitedtx/" target="_blank"><img className="insta" src={require('../assets/instagram-black.svg')} /></a>
        </div>
      </div>
    )
  }
}

export default Header;
