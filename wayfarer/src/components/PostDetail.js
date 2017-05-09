import React, {Component} from 'react'

class PostDetail extends Component {

	render() {
		console.log(this)
		return(

			<div className="postDetailCard">
				<img src={this.props.posts[0].profileIMG}></img>
				<h4>{this.props.posts[0].author}</h4>
				<h4>{this.props.posts[0].cityName}</h4>
				<p>{this.props.posts[0].text}</p>
				<h6>{this.props.posts[0].date}</h6>
			</div>

		)
	}
}

export default PostDetail;
