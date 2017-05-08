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
      <Footer />
    </div>
    )
  }
}

export default CityPostPage;