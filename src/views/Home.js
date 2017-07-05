import React, { Component } from 'react';
import Nav from '../components/Nav'
import Hero from '../components/Hero'
import CityContainer from '../containers/CityContainer'
import Footer from '../components/Footer'

class Home extends Component {
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

export default Home;
