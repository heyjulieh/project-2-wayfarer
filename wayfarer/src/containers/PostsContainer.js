import React, {Component} from 'react'
import PostList from '../components/PostList'
import Post from '../components/Post'
import CreatePostForm from '../components/CreatePostForm'


class PostsContainer extends Component {
	constructor() {
		super();
		this.state = {
			posts: [{_id: 4567, author: 'Drake', profileIMG: 'http://whatever', text: 'This was great!', date: '5/10/2017'}]
			// need to pull in all Post objects data from API
		}

		// this.handleNewPostSubmit = this.handleNewPostSubmit.bind(this);
	}

	handleNewPostSubmit(post){

		console.log(post)
		// send this to the server using AJAX

	}

	render() {

		return(

			<div>
				<PostList
					posts={this.state.posts} />
				<CreatePostForm
       				 onCreatePostFormSubmit={ this.handleNewPostSubmit } />
       		</div>

		)
	}
}

export default PostsContainer;
