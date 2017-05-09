import React, {Component} from 'react'

class Nav extends Component {
	constructor() {
		super();
		this.state = {
			pageName: 'Home'
		}
	}

	render() {
		return(

			<nav>
				<div id="navbar">
				<img src="http://theinspirationroom.com/daily/design/2015/9/google_travel_logo.png" height="50px" id="logo"/>
					<ul>
						<li><a href="#">Page One</a></li>
						<li><a href="#">Page Two</a></li>
						<li><a href="#">Page Three</a></li>
						<li id="maintitle"><h4>WAYFARER</h4></li>
					</ul>
				</div>
				<div id="search">
					<input id="searchBar" placeholder="Search..."></input>
						<button id="searchButton searchBar"><span className="glyphicon glyphicon-search"></span></button>
				</div>
			</nav>

		)
	}
}

export default Nav;
