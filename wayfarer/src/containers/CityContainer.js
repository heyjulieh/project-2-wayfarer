import React, {Component} from 'react'
import CityList from '../components/CityList'
import City from '../components/City'

class CityContainer extends Component {
	constructor() {
		super();
		this.state = {
			cities: [{_id: 1231, cityName: 'SanFrancisco', cityIMG: 'http://whatever', type: 'feature'},
			{_id: 1231, cityName: 'SanFrancisco', cityIMG: 'http://whatever', type: 'normal'}]
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