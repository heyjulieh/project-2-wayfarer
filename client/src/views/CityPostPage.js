import React, { Component } from 'react';
import Nav from '../components/Nav'
import PostsContainer from '../containers/PostsContainer'
import Footer from '../components/Footer'

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
        onGetUserData={this.getUserData.bind(this)} />
      <PostsContainer
        routeParams={this.props.params}
        onGetUserData={this.getUserData.bind(this)}
        />
      <Footer />
    </div>
    )
  }
}

export default CityPostPage;
