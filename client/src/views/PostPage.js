import React, { Component } from 'react';
import Nav from '../components/Nav'
import PostDetailContainer from '../containers/PostDetailContainer'
import Footer from '../components/Footer'

class PostPage extends Component {
  constructor() {
    super();
    this.state = {
      userData: []
    }
  }
  getUserData(uData) {
    this.setState({userData : uData})
  }

  render() {
    return (
    <div id="postPage">
      <Nav
        onGetUserData={this.getUserData.bind(this)}/>
      <PostDetailContainer
        routeParams={this.props.params}
        onGetUserData={this.getUserData.bind(this)}/>
      <Footer />
    </div>
    )
  }
}

export default PostPage;
