import React, { Component } from 'react';
import Nav from '../components/Nav'
import PostsContainer from '../containers/PostsContainer'
import Footer from '../components/Footer'
import ProfileHeader from '../components/ProfileHeader'

class ProfilePage extends Component {
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
      <ProfileHeader />
      <PostsContainer />
      <Footer />
    </div>
    )
  }
}

export default ProfilePage;

// displayName={nav.props.currentUser.displayName}
// displayImage={nav.props.currentUser.photoURL}

{/*getUserData={this.handleGetUserData.bind(this)} put this in nav component later*/}
