import React, {Component} from 'react'

class City extends Component {

	render() {

		return(

			<div className="cityCard">
				<img src={this.props.city.cityIMG}></img>
				<h3>{this.props.city.cityName}</h3>
			</div>	

		)
	}
}

export default City;