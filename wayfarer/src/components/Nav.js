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
				<div id="logo">Wayfarer</div>
				<ul>
					<li>Page One</li>
					<li>Page Two</li>
					<li>Page Three</li>
				</ul>
				<div id="searchBar">Search…</div>
			</nav>		

		)
	}
}

export default Nav;