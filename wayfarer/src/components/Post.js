console.log('This is from Post.js')
import React, {Component} from 'react'

class Post extends Component {

	render() {

		return(

			<div className="postCard">
				<img src={this.props.post.profileURL}></img>
				<h4>{this.props.post.author}</h4>
				<p>{this.props.post.text}</p>
				<h6>{this.props.post.date}</h6>
			</div>	

		)
	}
}

export default Post;