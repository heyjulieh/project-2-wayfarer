import React, {Component} from 'react'
import $ from 'jquery-ajax'
import CityList from '../components/CityList'

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
			url: '/api/cities'
		})
		.then( res => this.setState({cities: res}))
	}

	componentDidMount(){
		this.loadCitiesFromServer();
	}

	render() {
		return(
			<div id="wrapper">
				<CityList
					cities={this.state.cities}
				/>
			</div>
		)
	}
}

export default CityContainer;
