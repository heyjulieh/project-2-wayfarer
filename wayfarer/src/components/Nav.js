import React, {Component} from 'react'
import { firebase, auth } from '../utils/firebase'

class Nav extends Component {
	constructor() {
		super();
		this.state = {
			pageName: 'Home',
			currentUser: null
		}
	}
	componentWillMount() {
    auth.onAuthStateChanged(currentUser => {
      if (currentUser) {
        console.log('Logged in:', currentUser);
        // set currentUser in App component state
        this.setState({ currentUser });
      } else {
        this.setState({ currentUser: null });
      }
    });
  }
	loginButtonClicked(e) {
  e.preventDefault();
  // set up provider
  const provider = new firebase.auth.GoogleAuthProvider();
  console.log("signing in")
  // tell Firebase auth to log in with a popup and that provider
  auth.signInWithPopup(provider);
	}

	logoutButtonClicked(e) {
  e.preventDefault();
  // tell Firebase auth to log out
  console.log("signing out");
  auth.signOut();
	}

	render() {
		return(

			<nav className="navbar navbar-inverse">
			  <div className="container-fluid">
			    <div className="navbar-header">
			      <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
			        <span className="icon-bar"></span>
			        <span className="icon-bar"></span>
			        <span className="icon-bar"></span>
      			</button>

    		</div>
		    <div className="collapse navbar-collapse" id="myNavbar">
		      <ul className="nav navbar-nav">
					<li><a href="#"><h4><img src="http://ipventures.com.au/images/travel-icon.png" height="50px"/>WAYFARER</h4></a></li>
		        <li className="dropdown">
		          <a className="dropdown-toggle" data-toggle="dropdown" href="#">Pick a City<span className="caret"></span></a>
		          <ul className="dropdown-menu">
		            <li><a href="#">Page 1-1</a></li>
		            <li><a href="#">Page 1-2</a></li>
		            <li><a href="#">Page 1-3</a></li>
		          </ul>
		        </li>
      	</ul>
	      <ul className="nav navbar-nav navbar-right">
					<li>{this.state.currentUser}</li>
	        <li><a href="#"><span className="glyphicon glyphicon-user" onclick={this.logoutButtonClicked}></span> Sign Up</a></li>
	        <li><a href="#"><span className="glyphicon glyphicon-log-in" onclick={this.loginButtonClicked}></span> Login</a></li>
					<li><div className="col-lg-12">
								<div className="form-group input-group pull-right">
      						<input type="text" className="form-control input-sm" placeholder="Search cities"/>

    						</div>
							</div>
					</li>
	      </ul>

	    </div>
	  </div>
	</nav>

		)
	}
}

export default Nav;
