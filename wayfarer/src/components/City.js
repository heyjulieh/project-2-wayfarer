import React, {Component} from 'react'


class City extends Component {

	render() {

	  let cardDivClass;
	  if (this.props.city.type === 'largeCard') {
	  	 cardDivClass = `cityCard col-sm-12 col-md-6 col-lg-8 ${this.props.city.type}`
	  }
	  else {
	  	 cardDivClass = `cityCard col-sm-12 col-md-6 col-lg-4 ${this.props.city.type}`
	  }
		return(

			<div className={cardDivClass}>
				<img className="overlay" alt={this.props.city.cityName} src={this.props.city.imgURL}/>
				<h3 className="cityCardName">{this.props.city.cityName}</h3>
			</div>

		)
	}
}

export default City;
