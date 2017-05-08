import React, { Component } from 'react';
import Nav from '../components/Nav'
import PostDetailContainer from '../containers/PostDetailContainer'
import Footer from '../components/Footer'

document.getElementsByTagName('link')[1].href = '/css/index.css'

class PostPage extends Component {

  render() {
    return (
    <div> 
      <link rel="stylesheet" type="text/css" href="./css/index.css" />
      <Nav />
      <PostDetailContainer />
      <Footer />
    </div>
    )
  }
}

export default PostPage;