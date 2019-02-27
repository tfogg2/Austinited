import React, { Component } from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/home/Home'
import Parks from './components/categories/Parks'
import Park from './components/categories/Park'

import './Main.scss';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <Switch>
            <Route exact path="/" render={() => <Home />} />
            <Route exact path="/parks" component={Parks} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
