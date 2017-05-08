import React, { Component } from 'react';
import Nav from '../components/Nav'
import PostDetailContainer from '../containers/PostDetailContainer'
import Footer from '../components/Footer'

import {NavBar, Jumbotron, Button} from 'react-bootstrap'

class PostPage extends Component {

  render() {
    return (
    <div> 
      <Nav />
      <PostDetailContainer />
      <Footer />
    </div>
    )
  }
}

export default PostPage;