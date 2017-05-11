import React, { Component } from 'react';
import Nav from '../components/Nav'
import PostsContainer from '../containers/PostsContainer'
import Footer from '../components/Footer'
import ProfileHeader from '../components/ProfileHeader'

class ProfilePage extends Component {
  constructor() {
    super();
    this.state = {
      test: ''
    }
    
  }
  componentDidMount() {
    console.log(this.state, 'hello234');
  }

  testFunction(data) {
    this.setState({test : data})
    console.log('data is:', data);
  }

  render() {
    console.log(this.state, 'hello');

    return (
    <div>
      <Nav
      onTestFunction={this.testFunction.bind(this)}
      />
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