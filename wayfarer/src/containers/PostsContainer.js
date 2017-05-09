import React, {Component} from 'react'
import $ from 'jquery-ajax'
import PostList from '../components/PostList'
import Post from '../components/Post'
import CreatePostForm from '../components/CreatePostForm'


class PostsContainer extends Component {
	constructor() {
		super();
		this.state = {
			posts: []
		}
		this.loadPostsFromServer = this.loadPostsFromServer.bind(this);
		this.handlePostDelete = this.handlePostDelete.bind(this);
		this.handleNewPostSubmit = this.handleNewPostSubmit.bind(this);
	}

	loadPostsFromServer() {

		let currUrlId = window.location.href.replace('http://localhost:3001/cities/', '')
		console.log(currUrlId)

		$.ajax({
			method: 'GET',
			url: `http://localhost:3000/api/cities/${currUrlId}`
		})
		.then((res) => {
			this.setState({posts: res.posts})
		})

	}

	handlePostDelete(id) {
		$.ajax({
			method: 'DELETE',
			url: 'http://localhost:3000/api/cities'
		})
		.then((res) => {
			console.log('Post deleted');
		}, (err) => {
			console.log(err);
		});
	}

	componentDidMount() {
		this.loadPostsFromServer();
	}

	handleNewPostSubmit(post){
		console.log('handleNewPostSubmit is activated', post);
		let posts = this.state.data;
		post.id = Date.now();

		$.ajax({
			method: 'POST',
			url: 'http://localhost:3000/api/cities',
			data: posts
		})
		.then(res => {
			console.log(res);
			let newPosts = posts.concat([res]);
			this.setState({posts: newPosts});
		}, err => {
			console.error(err);
			this.setState({posts: posts});
		});
	}

	render() {
		return(

			<div className="postsList">
				<PostList
					posts={this.state.posts} />
				<CreatePostForm
       				 onCreatePostFormSubmit={ this.handleNewPostSubmit } />
       		</div>
		)
	}
}

export default PostsContainer;
