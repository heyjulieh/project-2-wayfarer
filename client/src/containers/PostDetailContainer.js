import React, {Component} from 'react'
import $ from 'jquery-ajax'
import PostDetail from '../components/PostDetail'
import { auth } from '../utils/firebase'

class PostDetailContainer extends Component {
	constructor() {
		super();
		this.state = {
			currentUser: null,
			loggedIn: false,
			post: [],
			city: []
		}

		this.loadPostFromServer = this.loadPostFromServer.bind(this);
		this.handlePostUpdate = this.handlePostUpdate.bind(this);
		this.handlePostDelete = this.handlePostDelete.bind(this);
		this.handleGetUserData = this.handleGetUserData.bind(this);
		this.loadCityFromServer = this.loadCityFromServer.bind(this);
	}

	componentWillMount() {
		auth.onAuthStateChanged(currentUser => {
			if (currentUser) {
				// set currentUser in App component state
				this.setState({ currentUser });
				this.setState({ loggedIn: true });
			} else {
				this.setState({ currentUser: null });
				this.setState({ loggedIn: false });
			}
		})
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
		setInterval(this.loadPostsFromServer, this.loadCityFromServer, this.handleGetUserData, this.props.pollInterval)
	}

	handleGetUserData() {
		var uData = this.state.currentUser;
		() => {
			this.props.onGetUserData(uData)
		}
	}

	render() {
		console.log('this.state.currentUser is: ', this.state.currentUser)

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
					currentUser={this.state.currentUser}
					loggedIn={this.state.loggedIn}
				/>
			</div>
		)
	}
}

export default PostDetailContainer;
