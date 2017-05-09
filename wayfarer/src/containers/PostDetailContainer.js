import React, {Component} from 'react'
import $ from 'jquery-ajax'
import PostDetail from '../components/PostDetail'

// need to import edit post form

class PostDetailContainer extends Component {
	constructor() {
		super();
		this.state = {
			post: {
				userIMG: 'https://images.pexels.com/photos/101584/pexels-photo-101584.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb', 
				user: 'Anthony L.', 
				cityName: 'SanFrancisco',
				title: 'Home is Where the Sandwich is', 
				text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolo.',
				date: '5/10/2017'
			}
		}
		// this.loadPostFromServer = this.loadPostFromServer.bind(this);
		// handle post edit form submit and delete
		// this.handlePostDelete = this.handlePostDelete.bind(this);
		// this.handleNewPostSubmit = this.handleNewPostSubmit.bind(this);

	}

	// loadPostFromServer() {

	// 	let parsedUrlData = window.location.href.replace('http://localhost:3001/cities/', '')
	// 	console.log(parsedUrlData)

	// 	$.ajax({
	// 		method: 'GET',
	// 		url: `http://localhost:3000/api/cities/${parsedUrlData}`
	// 	})
	// 	.then((res) => {

	// 		// find the post within the returned res.posts that matches our URL post id

	// 		this.setState({posts: res.posts})
	// 	})

	// }

	render() {
		return(

			<PostDetail
				post={this.state.post}
			/>

		)
	}

}

export default PostDetailContainer;

