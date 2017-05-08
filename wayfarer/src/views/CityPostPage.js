import React, { Component } from 'react';
import Nav from '../components/Nav'
import Hero from '../components/Hero'
import PostsContainer from '../containers/PostsContainer'
import Footer from '../components/Footer'
import CreatePostForm from '../components/CreatePostForm'


document.getElementsByTagName('link')[1].href = '/css/index.css'

class CityPostPage extends Component {

  render() {
    return (
    <div> 
      <Nav />
      <Hero />
      <PostsContainer />
      <CreatePostForm />
      <Footer />
    </div>
    )
  }
}

export default CityPostPage;