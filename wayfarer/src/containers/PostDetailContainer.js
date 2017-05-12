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

		$.ajax({
			method: 'GET',
			url: `http://localhost:3000/api/cities/${this.props.routeParams.cityId}/posts/${this.props.routeParams.postId}`
		})
		.then((res) => {
			console.log(this.props.routeParams, 'route params')
			console.log('post detail res is: ', res)
			// find the post within the returned res.posts that matches our URL post id
			this.setState({post: res})
		})

	}

	handlePostUpdate(targetPost) {

		$.ajax({
			method: 'PUT',
			url: `http://localhost:3000/api/cities/${this.props.routeParams.cityId}/posts/${this.props.routeParams.postId}`,
			data: targetPost
		})
		.then((res) => {

			console.log('post detail res is: ', res)
			// find the post within the returned res.posts that matches our URL post id
			this.setState({post: targetPost})
		})
	}

	componentDidMount() {
		this.loadPostFromServer();
	}

	render() {
		return(

			<PostDetail
				post={ this.state.post }
				onPostUpdate={this.handlePostUpdate}
			/>

		)
	}

}

export default PostDetailContainer;

				// This stuff goes in Post Detail Component above
				// {/*uniqueID={ this.state.post['_id']}*/}
				// {/*key={ this.state.post['_id'] }*/}

// add onPostUpdate as a prop to PostDetail on line 44

// onPostDelete={ this.onPostDelete }
