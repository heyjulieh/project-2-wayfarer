import React, {Component} from 'react'

class Footer extends Component {

	render() {

		return(

			<footer>
				<div id="footer">

						<div className="row">
							<div className="col-lg-6 col-md-6 col-sm-6 footerleft">
								<ul className="linkfooter">
									<li><a href="https://facebook.com">Follow us on Facebook</a></li><br></br>
									<li><a href="https://instagram.com">Follow us on Instagram</a></li><br></br>
									<li><a href="https://github.com/heyjulieh/project-2-wayfarer/tree/master/wayfarer">View our code on GitHub</a></li><br></br>
									<li><p id="footer-copyright">© 2017 JWAM x GA  |  all rights reserved</p></li>
								</ul>
							</div>
							<div className="col-lg-6 col-md-6 col-sm-6 footerright">
								<p>Wayfarer is a personal and crowdsourced travel review application that keeps track of the places everyone loves. Currently, cities available for review are: San Francisco, Dubai, Reykjavik, Amsterdam, and Tokyo. For requests to add other cities, please contact us! More cities will be coming soon so keep checking back. If you love our app, please feel free to share it with your friends!</p>
							</div>
						</div>
					</div>
				
			</footer>

		)
	}
}

export default Footer;
