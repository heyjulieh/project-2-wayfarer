import React, {Component} from 'react'


class NavCity extends Component {

	render() {
    console.log('navcity', this.props)

	  let cityLink = `/cities/${this.props.city._id}`

		return(

			<div className="navCity">
				<a href={cityLink}>
				<p className="navCity">{this.props.city.cityName}</p>
				</a>
			</div>

		)
	}
}

export default NavCity;
