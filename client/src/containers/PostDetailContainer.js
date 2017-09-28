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
		this.handlePostUpdate = this.handlePostUpdate.bind(this);
		this.handlePostDelete = this.handlePostDelete.bind(this);


	}

	loadPostFromServer() {
		$.ajax({
			method: 'GET',
			url: `/api/cities/${this.props.routeParams.cityId}/posts/${this.props.routeParams.postId}`
		})
		.then((res) => {
			console.log(this.props.routeParams, 'route params')
			console.log('post detail res is: ', res)
			// find the post within the returned res.posts that matches our URL post id
			this.setState({post: res})
		})

	}

	handlePostDelete(targetPost) {
		$.ajax({
			method: 'DELETE',
			url: `/api/cities/${this.props.routeParams.cityId}/posts/${this.props.routeParams.postId}`,
			data: targetPost
		})
		.then((res) => {
			console.log('Post deleted', res)
		})
		window.location.href=`/cities/${this.props.routeParams.cityId}`
	}

	handlePostUpdate(targetPost) {
		$.ajax({
			method: 'PUT',
			url: `/api/cities/${this.props.routeParams.cityId}/posts/${this.props.routeParams.postId}`,
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
			<div id="wrapper">
				<PostDetail
					post={ this.state.post }
					onPostUpdate={this.handlePostUpdate}
					onPostDelete={this.handlePostDelete}
				/>
			</div>
		)
	}

}

export default PostDetailContainer;

				// This stuff goes in Post Detail Component above
				// {/*uniqueID={ this.state.post['_id']}*/}
				// {/*key={ this.state.post['_id'] }*/}

// add onPostUpdate as a prop to PostDetail on line 44

// onPostDelete={ this.onPostDelete }
