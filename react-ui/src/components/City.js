import React, {Component} from 'react'


class City extends Component {

	render() {

	  let cardDivClass;
	  if (this.props.city.type === 'largeCard') {
	  	 cardDivClass = `parallax cityCard col-sm-12 col-md-6 col-lg-8 ${this.props.city.type}`
	  }
	  else {
	  	 cardDivClass = `parrallax cityCard col-sm-12 col-md-6 col-lg-4 ${this.props.city.type}`
	  }

	  let cityLink = `/cities/${this.props.city._id}`

		return(

			<div className={cardDivClass}>
				<a href={cityLink}>
				<img alt={this.props.city.cityName} src={this.props.city.imgURL}/>
				<h3 className="cityCardName">{this.props.city.cityName}</h3>
				</a>
			</div>

		)
	}
}

export default City;
