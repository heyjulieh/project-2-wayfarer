import React, {Component} from 'react'
import { firebase, auth } from '../utils/firebase'

// import { Link } from 'react-router-dom'
class Nav extends Component {

	constructor(props) {
		super(props);
		this.state = {
			pageName: 'Home',
			currentUser: null,
      loggedIn: false
		}
    this.handleGetUserData = this.handleGetUserData.bind(this)
    this.loginButtonClicked = this.loginButtonClicked.bind(this)
    this.logoutButtonClicked = this.logoutButtonClicked.bind(this)

	}

	componentWillMount() {
    auth.onAuthStateChanged(currentUser => {
      if (currentUser) {
        console.log('Logged in:', currentUser);
        // set currentUser in App component state
        this.setState({ currentUser });
        // currentUserData=currentUser;
        // console.log(currentUserData);
        console.log(this.state, "logging");
      } else {
        this.setState({ currentUser: null });
      }
    })
  }

	loginButtonClicked(e) {
    e.preventDefault();
    // set up provider
    const provider = new firebase.auth.GoogleAuthProvider();
    console.log("signing in")
    // tell Firebase auth to log in with a popup and that provider
    auth.signInWithPopup(provider);
	}

  componentDidMount() {

    setInterval(this.handleGetUserData, 3000);

  }

  handleGetUserData() {

    var uData = this.state.currentUser;

    () => {
      console.log('clicked test button');
      this.props.onGetUserData(uData)
    }

  }

	logoutButtonClicked(e) {
    e.preventDefault();
    // tell Firebase auth to log out
    console.log("signing out");
    auth.signOut();
	}




	render() {
		return(

			<nav className="navbar">
              <div className="container-fluid">
                <div className="navbar-header">
									<a href="/" className="navbar-brand" ><h4><img src="https://image.flaticon.com/icons/png/512/56/56059.png" height="50px"/>WAYFARER</h4></a>
                  	<button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
	                    <span className="icon-bar"></span>
	                    <span className="icon-bar"></span>
	                    <span className="icon-bar"></span>
                  	</button>
            		</div>

            <div className="collapse navbar-collapse" id="myNavbar">
              <ul className="nav navbar-nav">
                <li className="dropdown">
                  <a className="dropdown-toggle" data-toggle="dropdown" href="#">Pick a City<span className="caret"></span></a>
                  <ul className="dropdown-menu">
                    <li><a href="https://www.facebook.com">Amsterdam</a></li>
                    <li><a href="https://www.twitter.com">Dubai</a></li>
                    <li><a href="https://www.instagram.com">Reykjavik</a></li>
										<li><a href="https://www.instagram.com">San Francisco</a></li>
										<li><a href="https://www.instagram.com">Tokyo</a></li>


                      </ul>
                </li>
              </ul>
              <ul className="nav navbar-nav navbar-right">
                <li id="userName">{this.state.currentUser && this.state.currentUser.displayName}</li>
                <li><a onClick={this.loginButtonClicked}>
                <span className="glyphicon glyphicon-log-in" ></span>Login</a></li>
                <li><a onClick={this.logoutButtonClicked}><span className="glyphicon glyphicon-log-out" ></span>Logout</a></li>
              </ul>

            </div>
          </div>
        </nav>

		)
	}
}

export default Nav;
