import React, { Component } from 'react';
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/home/Home'

import './Main.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Home alt="Show if root url"/>
        <Footer />
      </div>
    );
  }
}

export default App;
