console.log('This is from Post.js')
import React, {Component} from 'react'

class Post extends Component {

	render() {

		console.log(this.props.post)

		return(

			<div className="postCard col-sm-12 col-md-12 col-lg-12">
				<div className="userSection col-sm-12 col-md-12 col-lg-3">
					<img src={this.props.post.userIMG}></img>
					<h4 className="postUser">{this.props.post.user}</h4>
				</div>
				<div className="postSection col-sm-12 col-md-12 col-lg-9">
					<h3 className="postTitle"><a href="#">{this.props.post.title}</a></h3>
					<p className="postText">{this.props.post.text}</p>
					<h6 className="postDate">{this.props.post.date}</h6>
				</div>
			</div>

		)
	}
}

export default Post;
