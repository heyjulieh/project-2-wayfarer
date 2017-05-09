import React, { Component } from 'react';
import Nav from '../components/Nav'
import Hero from '../components/Hero'
import PostsContainer from '../containers/PostsContainer'
import Footer from '../components/Footer'
import CreatePostForm from '../components/CreatePostForm'

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
