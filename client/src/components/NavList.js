import React, {Component} from 'react'
import NavCity from './NavCity'

class NavList extends Component {
	render() {
		let citiesArray = this.props.cities.map( (city) => {
			return (
					<NavCity
						key={city._id}
						city={city}
					 />
			)
		});

		return(
			<div className="citiesGrid container-fluid">
				<div className="row">
					{citiesArray}
				</div>
			</div>
		)
	}
}

export default NavList;
