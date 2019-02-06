import React, { Component } from 'react';

class Header extends Component {
  render(){
    return(
      <div className="header">
        <div className="logo">
          <h1><span>Austin</span>ited</h1>
        </div>
        <div className="right-nav">
          <a href="https://www.instagram.com/austinitedtx/" target="_blank"><img className="insta" src={require('../assets/instagram-black.svg')} /></a>
        </div>
      </div>
    )
  }
}

export default Header;
