import React, {Component} from 'react'

class Footer extends Component {

	render() {

		return(

			<footer>
				<div className="container">
					<div className="col-lg-4 col-md-4 col-sm-4 pull-right">
						<ul className="linkfooter">
							<li><a href="https://facebook.com">Follow us on Facebook</a></li><br></br>
							<li><a href="https://instagram.com">Follow us on Instagram</a></li><br></br>
							<li><a href="https://github.com/heyjulieh/project-2-wayfarer/tree/master/wayfarer">View our code on GitHub</a></li><br></br>
						</ul>
					</div>
					<div className="col-lg-7 col-md-7 col-sm-7 pull-left">
						<p>Wayfarer is a personal and crowdsourced travel review application that keeps track of the places everyone loves. Currently, cities available for review are: San Francisco, Dubai, Reykjavik, Amsterdam, and Tokyo. For requests to add other cities, please contact us! More cities will be coming soon so keep checking back. If you love our app, please feel free to share it with your friends!</p>
						<br/>
						<p id="footer-copyright">© 2017 JWAM x GA  |  all rights reserved</p>
					</div>
				</div>
			</footer>

		)
	}
}

export default Footer;
