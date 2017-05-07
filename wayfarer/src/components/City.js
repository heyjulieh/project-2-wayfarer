import React, {Component} from 'react'
import Link from 'react-router'

class City extends Component {

	render() {

		return(

			<div className="cityCard">
				<img src={this.props.city.imgURL}></img>
				<h3>{this.props.city.name}</h3>
			</div>	

		)
	}
}

export default City;