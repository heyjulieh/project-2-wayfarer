import React, { Component } from 'react';
import Nav from '../components/Nav'
import PostsContainer from '../containers/PostsContainer'
import Footer from '../components/Footer'
import CreatePostForm from '../components/CreatePostForm'

class CityPostPage extends Component {

  render() {

    return (
    <div>
      <Nav />
      <PostsContainer
        routeParams={this.props.params}
        />
      <Footer />
    </div>
    )
  }
}

export default CityPostPage;
