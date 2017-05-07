console.log('made it to CityPostPage')

import React, { Component } from 'react';
import Nav from '../components/Nav'
import Hero from '../components/Hero'
import PostsContainer from '../containers/PostsContainer'
import Footer from '../components/Footer'

import {NavBar, Jumbotron, Button} from 'react-bootstrap'

class CityPostPage extends Component {

  render() {
    return (
    <div> 
      <Nav />
      <Hero />
      <PostsContainer />
      <h1>TESTING POST ROUTE</h1>
      <Footer />
    </div>
    )
  }
}

export default CityPostPage;