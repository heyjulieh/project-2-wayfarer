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

			<nav className="navbar navbar-inverse">
			  <div className="container-fluid">
			    <div className="navbar-header">
						<div className="col-lg-12 pull-left">
							<a href="#"><h4><img src="http://ipventures.com.au/images/travel-icon.png" height="50px"/>WAYFARER</h4></a>
      					<input type="text" className="form-control input-sm" placeholder="Search cities"/>
						</div>

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
		            <li><a href="#">Page 1-1</a></li>
		            <li><a href="#">Page 1-2</a></li>
		            <li><a href="#">Page 1-3</a></li>
		          </ul>
		        </li>
      	</ul>
	      <ul className="nav navbar-nav navbar-right">
	        <li><a href="#"><span className="glyphicon glyphicon-share-alt"></span> Login</a></li>
	        <li><a href="#"><span className="glyphicon glyphicon-exclamation-sign"></span> Logout</a></li>

	      </ul>

	    </div>
	  </div>
	</nav>

		)
	}
}

export default Nav;
