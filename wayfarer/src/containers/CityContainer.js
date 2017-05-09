import React, {Component} from 'react'
import $ from 'jquery-ajax'
import CityList from '../components/CityList'
import City from '../components/City'

class CityContainer extends Component {
	constructor() {
		super();
		this.state = {
			cities: []
		}
		this.loadCitiesFromServer = this.loadCitiesFromServer.bind(this);

	}

	loadCitiesFromServer() {
		$.ajax({
			method: 'GET',
			url: 'http://localhost:3000/api/cities'
		})
		.then( res => this.setState({cities: res}))

	}

	componentDidMount(){
		this.loadCitiesFromServer();
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


// {_id: 1, imgURL: "/images/cities/amsterdam.jpg", cityName: 'Amsterdam', type: 'largeCard'},
// {_id: 2, imgURL: "/images/cities/iceland.jpg", cityName: 'Iceland', type: 'mediumCard'},
// {_id: 3, imgURL: "/images/cities/dubai.jpg", cityName: 'Dubai', type: 'smallCard'}