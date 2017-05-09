import React, {Component} from 'react'
import PostList from '../components/PostList'
import Post from '../components/Post'
import CreatePostForm from '../components/CreatePostForm'


class PostsContainer extends Component {
	constructor() {
		super();
		this.state = {
			posts: [
			{	_id: 1, 
				userIMG: 'https://images.pexels.com/photos/101584/pexels-photo-101584.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb', 
				user: 'Anthony L.', 
				title: 'Home is Where the Sandwich is', 
				text: 'This is a sample text entry',
				date: '5/10/2017'
			},
			{	_id: 2, 
				userIMG: 'https://images.pexels.com/photos/27411/pexels-photo-27411.jpg?w=1260&h=750&auto=compress&cs=tinysrgb', 
				user: 'Violet', 
				title: 'Words from a Local', 
				text: 'This is a sample text entry',
				date: '5/10/2017'
			},
			{	_id: 3, 
				userIMG: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb', 
				user: 'Blair', 
				title: 'Really Cool Vibes, Man.', 
				text: 'This is a sample text entry',
				date: '5/10/2017'
			},




				]
			// need to pull in all Post objects data from API
		}

		this.handleNewPostSubmit = this.handleNewPostSubmit.bind(this);
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
