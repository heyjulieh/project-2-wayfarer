import React, {Component} from 'react'
import CityList from '../components/CityList'
import City from '../components/City'

class CityContainer extends Component {
	constructor() {
		super();
		this.state = {
			cities: [
				{_id: 1, imgURL: "/images/cities/amsterdam.jpg", cityName: 'Amsterdam', type: 'largeCard'},
				{_id: 2, imgURL: "/images/cities/iceland.jpg", cityName: 'Iceland', type: 'mediumCard'},
				{_id: 3, imgURL: "/images/cities/dubai.jpg", cityName: 'Dubai', type: 'smallCard'}
			]
			// need to pull in all city objects data from API
			// e.g. {name: 'SanFrancisco', imgURL: 'http://whatever', type: 'feature'}
		}
	}

	render() {
		return(
			<CityList
				cities={this.state.cities}
			/>

		)
	}
}

export default CityContainer;
