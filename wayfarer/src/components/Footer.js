import React, {Component} from 'react'

class Footer extends Component {

	render() {

		return(

			<footer>
				<div id="footer">
					<ul id="footerlist">
						<li><a href="#">About</a></li><br></br>
						<li><a href="#">Contact Us</a></li><br></br>
						<li><a href="#">Other Page</a></li><br></br>
						<li><p>© 2017 J-WAM x GA  |  ALL RIGHTS RESERVED</p></li>
					</ul>
						<div>
						<p id="footerblurb">Wayfarer is an a travel review application based in the United States.<br></br> Currently, cities available for review are: San Francisco, Los Angeles, New York. <br></br>For requests to add other cities, please contact us and we will look into it!<br></br>Etc etc etc etc etc blah blah.</p>
						</div>
				</div>
			</footer>

		)
	}
}

export default Footer;
