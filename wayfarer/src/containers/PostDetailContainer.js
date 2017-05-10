import React, {Component} from 'react'
import $ from 'jquery-ajax'
import PostDetail from '../components/PostDetail'

// need to import edit post form

class PostDetailContainer extends Component {
	constructor() {
		super();
		this.state = {

			post: []
		}

		this.loadPostFromServer = this.loadPostFromServer.bind(this);
		// handle post edit form submit and delete
		// this.handlePostDelete = this.handlePostDelete.bind(this);
		// this.handleNewPostSubmit = this.handleNewPostSubmit.bind(this);

	}

	loadPostFromServer() {

		console.log('Made it to loadPostFromServer')

		let parsedUrlData = window.location.href.replace('http://localhost:3001/cities/', '')
		console.log(parsedUrlData)

		$.ajax({
			method: 'GET',
			url: `http://localhost:3000/api/cities/${parsedUrlData}`
		})
		.then((res) => {

			console.log('post detail res is: ', res)
			// find the post within the returned res.posts that matches our URL post id
			this.setState({post: res})
		})

	}

	componentDidMount() {
		this.loadPostFromServer();
	}

	render() {
		return(

			<PostDetail

				uniqueID={ this.state.post['_id'] }
				key={ this.state.post['_id'] }
				post={ this.state.post }
			/>

		)
	}

}

export default PostDetailContainer;


// add onPostUpdate as a prop to PostDetail on line 44

// onPostDelete={ this.onPostDelete }
