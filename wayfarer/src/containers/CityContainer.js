import React, {Component} from 'react'
import CityList from '../components/CityList'
import City from '../components/City'

class CityContainer extends Component {
	constructor() {
		super();
		this.state = {
			cities: []
		}
	}

	render() {

		return(

			<CityList />	

		)
	}
}

export default CityContainer;