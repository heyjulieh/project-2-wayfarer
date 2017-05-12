import React, { Component } from 'react';
import Nav from '../components/Nav'
import PostDetailContainer from '../containers/PostDetailContainer'
import Footer from '../components/Footer'

class PostPage extends Component {

  render() {
    return (
    <div>
      <Nav />
        <PostDetailContainer
          routeParams={this.props.params}
        />
      <Footer />
    </div>
    )
  }
}

export default PostPage;
