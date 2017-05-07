import React, { Component } from 'react';
import Nav from '/components/Nav'
import Hero from '/components/Hero'
import CityContainer from '/components/CityContainer'
import Footer from '/components/Footer'

import {NavBar, Jumbotron, Button} from 'react-bootstrap'
import './App.css';

class App extends Component {
  render() {
    return (
    <div> 
      <Nav />
      <Hero />
      <CityContainer />
      <Footer />
    </div>
    )
  }
}

export default App;
