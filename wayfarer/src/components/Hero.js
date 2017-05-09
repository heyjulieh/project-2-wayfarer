import React, {Component} from 'react'

class Hero extends Component {
	constructor() {
		super();
		this.state = {
			backgroundURL: ''
		}
	}

	render() {

		return(

			<div className="Jumbotron">
				<div className="JumbotronText">
				<h3>Lorem ipsum dolor sit amet consectetur apidiscing ullamco</h3>
				<div id="ScrollArrow">V</div>
				</div>
			</div>

		)
	}
}

export default Hero;
