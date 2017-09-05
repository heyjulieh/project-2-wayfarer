import React, { Component } from 'react';
import Nav from '../components/Nav'
import PostsContainer from '../containers/PostsContainer'
import Footer from '../components/Footer'
import CreatePostForm from '../components/CreatePostForm'

class CityPostPage extends Component {
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
    <div>
      <Nav
        onGetUserData={this.getUserData.bind(this)}
        routeParams={this.props.params}/>
      <PostsContainer
        routeParams={this.props.params}/>
      <Footer />
    </div>
    )
  }
}

export default CityPostPage;
