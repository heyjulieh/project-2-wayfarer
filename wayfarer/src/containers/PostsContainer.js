import React, {Component} from 'react'
import PostList from '../components/PostList'
import Post from '../components/Post'

class PostsContainer extends Component {
	constructor() {
		super();
		this.state = {
			posts: [{_id: 4567, author: 'Drake', profileIMG: 'http://whatever', text: 'This was great!', date: '5/10/2017'}]
			// need to pull in all Post objects data from API
		}
	}

	render() {

		return(

			<PostList 
				posts={this.state.posts}
			/>	

		)
	}
}

export default PostsContainer;