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
				<div id="logo">
					<ul id="navlist">
						<li id="navlist"><a href="#">Page One</a></li>
						<li id="navlist"><a href="#">Page Two</a></li>
						<li id="navlist"><a href="#">Page Three</a></li>
					</ul>
				</div>
				<div id="search">
					<input id="searchBar" placeholder="Search..."></input>
						<button id="searchButton searchBar"><img src="http://www.clker.com/cliparts/w/r/Q/0/x/D/search-icon-light-grey.svg" height="20px"/></button>
				</div>
			</nav>

		)
	}
}

export default Nav;
