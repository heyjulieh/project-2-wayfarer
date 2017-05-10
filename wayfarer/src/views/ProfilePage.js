import React, { Component } from 'react';
import Nav from '../components/Nav'
import PostsContainer from '../containers/PostsContainer'
import Footer from '../components/Footer'
import ProfileHeader from '../components/ProfileHeader'

class ProfilePage extends Component {

  render() {

    return (
    <div>
      <Nav />
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