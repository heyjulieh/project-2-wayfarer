import React, {Component} from 'react'
import Post from './Post'

class PostList extends Component {

	render() {
		console.log('POSTS PROPS: ', this.props.posts)
		let postsArray = this.props.posts.map( (post) => {
			return (
				<Post
					key={post._id}
					uniqueId={post._id}
					post={post}
					className="postCard" />
			)
		});
		console.log('POSTS array',postsArray);

		return(

			<div className="postsList container">
				<h1 className="cityTitle center">{this.props.cityName}</h1>
				<div className="row">
					{postsArray}
				</div>
			</div>
		)
	}
}
export default PostList;
