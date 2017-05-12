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
				<img alt={this.props.city.name} src={this.props.city.imgURL}/>
				<h3 className="cityCardName">{this.props.city.name}</h3>
			</div>

		)
	}
}

export default City;
