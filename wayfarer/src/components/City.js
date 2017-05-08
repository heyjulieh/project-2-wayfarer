import React, {Component} from 'react'


class City extends Component {

	render() {

		return(

			<div className="cityCard col-sm-12 col-md-6 col-lg-4">
				<img className="cityCardImage" src={this.props.city.cityIMG}></img>
				<h3 className="cityCardName">{this.props.city.cityName}</h3>
			</div>	

		)
	}
}

export default City;