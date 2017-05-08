import React, {Component} from 'react'
// import Styles from '../public/css/index.css'

class City extends Component {

	render() {

		return(

			<div className="cityCard">
				<img src={this.props.city.cityIMG} height="20px"></img>
				<h3>{this.props.city.cityName}</h3>
			</div>

		)
	}
}

export default City;
