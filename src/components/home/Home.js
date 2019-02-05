import React, { Component } from 'react'
import Splash from './Splash'
import Content from './Content'
import Cta from './Cta'

class Home extends Component{
  render(){
    return(
      <div className="home">
        <Splash />
        <Content />
        <Cta />
      </div>
    )
  }
}

export default Home;
