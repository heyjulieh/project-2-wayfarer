import React, {Component} from 'react'

class Hero extends Component {
	constructor() {
		super();
		this.state = {
			scrollURL: ''
		}
	}

	render() {

		return(

			<div className="hero container">
				<div className="hero-bg"></div>
					<div className="hero-content row">
	        	<h1 className="header center col s12 m12 l12">Wayfarer</h1>
	        	<h2 className="center col s12 m12 l12">When it's about the journey, <br></br> <em>and</em> the destination.</h2>
							<section id="hero-scroll" className="scroll">
			           <a href="#"><span></span><h5>Scroll</h5></a>
			         </section>
					</div>
				</div>
		)
	}
}

export default Hero;
