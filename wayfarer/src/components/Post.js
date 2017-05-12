console.log('This is from Post.js')
import React, {Component} from 'react'

class Post extends Component {



	render() {

		var formattedDate = this.props.post.date.split("T")[0];
		var truncatedText = this.props.post.text.substring(0, 350) + '…';

		return(

			<div className="postCard col-sm-12 col-md-12 col-lg-12">
				<div className="userSection col-sm-12 col-md-12 col-lg-3">
					<img className="postImage img-circle img-responsive center-block" src={this.props.post.userIMG}></img>
					<h4 className="postUser">{this.props.post.user}</h4>
				</div>
				<div className="postSection col-sm-12 col-md-12 col-lg-9">
					<h2 className="postTitle"><a href="#">{this.props.post.title}</a></h2>
					<p className="postText">{truncatedText}</p>
					<h6 className="postDate">{formattedDate}</h6>
				</div>
			</div>
		)
	}
}

export default Post;
