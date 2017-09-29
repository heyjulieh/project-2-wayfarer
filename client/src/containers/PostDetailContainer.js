import React, {Component} from 'react'
import $ from 'jquery-ajax'
import PostDetail from '../components/PostDetail'

class PostDetailContainer extends Component {
	constructor() {
		super();
		this.state = {
			post: [],
			city: []
		}

		this.loadPostFromServer = this.loadPostFromServer.bind(this);
		this.handlePostUpdate = this.handlePostUpdate.bind(this);
		this.handlePostDelete = this.handlePostDelete.bind(this);
		this.loadCityFromServer = this.loadCityFromServer.bind(this);
	}

	loadCityFromServer() {
		$.ajax({
			method: 'GET',
			url: `/api/cities/${this.props.routeParams.cityName}`
		})
		.then( res => this.setState({city: res}))
	}

	loadPostFromServer() {
		$.ajax({
			method: 'GET',
			url: `/api/cities/${this.props.routeParams.cityName}/posts/${this.props.routeParams.postId}`
		})
		.then((res) => {
			this.setState({post: res})
		})
	}

	handlePostDelete(targetPost) {
		$.ajax({
			method: 'DELETE',
			url: `/api/cities/${this.props.routeParams.cityName}/posts/${this.props.routeParams.postId}`,
			data: targetPost
		})
		.then((res) => {
			console.log(res)
		})
		window.location.href=`/cities/${this.props.routeParams.cityName}`
	}

	handlePostUpdate(targetPost) {
		$.ajax({
			method: 'PUT',
			url: `/api/cities/${this.props.routeParams.cityName}/posts/${this.props.routeParams.postId}`,
			data: targetPost
		})
		.then((res) => {
			this.setState({post: targetPost})
		})
	}

	componentDidMount() {
		this.loadPostFromServer();
		this.loadCityFromServer();
		setInterval(this.loadPostsFromServer, this.loadCityFromServer, this.props.pollInterval)
	}

	render() {
		return(
			<div className="postPage">
				<PostDetail
					post={ this.state.post }
					title={this.state.post.title}
					text={this.state.post.text}
					uniqueId={this.state.post._id}
					key={this.state.post._id}
					onPostUpdate={this.handlePostUpdate}
					onPostDelete={this.handlePostDelete}
					city={this.state.city.cityName}
				/>
			</div>
		)
	}
}

export default PostDetailContainer;
