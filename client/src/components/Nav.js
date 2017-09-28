import React, {Component} from 'react'
import { firebase, auth } from '../utils/firebase'
import $ from 'jquery-ajax'
import NavCity from './NavCity'


// import { Link } from 'react-router-dom'
class Nav extends Component {

	constructor(props) {
		super(props);
		this.state = {
			pageName: '',
			currentUser: null,
      loggedIn: false,
			cities: []
		}

		this.loadCitiesFromServer = this.loadCitiesFromServer.bind(this);
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
				this.setState({ loggedIn: true });
      } else {
        this.setState({ currentUser: null });
				this.setState({ loggedIn: false});
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

	loadCitiesFromServer() {
		$.ajax({
			method: 'GET',
			url: '/api/cities'
		})
		.then( res => this.setState({cities: res}))
	}

  componentDidMount() {
		this.loadCitiesFromServer();
    setInterval(this.handleGetUserData, 3000);
  }

  handleGetUserData() {
    var uData = this.state.currentUser;
    () => {
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
		let citiesArray = this.state.cities.map( (city) => {
			return (
					<NavCity
						key={city._id}
						city={city} />
			)
		});

		return(
			<nav className="navbar">
              <div className="container-fluid">
                <div className="navbar-header">
									<a href="/" className="navbar-brand" ><h4><img src="https://image.flaticon.com/icons/png/512/56/56059.png" height="50px" alt="traveler logo"/>WAYFARER</h4></a>
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
                    {citiesArray}
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
