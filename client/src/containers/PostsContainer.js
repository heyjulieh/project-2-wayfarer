import React, {Component} from 'react'
import $ from 'jquery-ajax';
import PostList from '../components/PostList'
import CreatePostForm from '../components/CreatePostForm'


class PostsContainer extends Component {

	// Research Prop.types
	// Check to see if username is being passed in as a prop

	constructor(props) {
		super(props);
		this.state = {
			posts: []
		};

		this.loadPostsFromServer = this.loadPostsFromServer.bind(this);
		this.handleNewPostSubmit = this.handleNewPostSubmit.bind(this);
		//this.handlePostSubmit = this.handlePostSubmit.bind(this);
		// this.handlePostDelete = this.handlePosttDelete.bind(this);
		// this.handlePostUpdate = this.handlePostUpdate.bind(this);

	}

	loadPostsFromServer(){

		// need to load posts from server
		console.log('this.props.routeParams is', this.props.routeParams)
		console.log('city id', this.props.routeParams.cityId);
	    $.ajax({
	      method: 'GET',
	      url: `/api/cities/${this.props.routeParams.cityId}/posts`
	    })
	    .then( (res) => {this.setState({posts: res})
			})
  }
	componentDidMount() {
		this.loadPostsFromServer();
		// setInterval(this.loadPostsFromServer, this.props.pollInterval);
	}


	handleNewPostSubmit(post){

		console.log('reached handleNewPostSubmit');
		let posts = this.state.posts;
		console.log('posts is: ', posts);
		let newPost = posts.concat([post]);
		console.log('newPost is: ', newPost)
		this.setState({posts: newPost});
		// use this once posts' data route is confirmed
		$.ajax({
			method: 'POST',
			url: `/api/cities/${this.props.routeParams.cityId}/posts`,
			data: post
		})
		.then(res => {
			console.log('res is: ', res)
		}, err => {
			console.error(err);
		});
	}

handlePostDelete(id){
    $.ajax({
      method: 'DELETE',
      url: `/api/cities/${this.props.routeParams.cityId}/posts/${this.props.routeParams.postId}`

	    })
	    .then((res) => {
	      console.log('Post deleted');
	    }, (err) => {
	      console.error(err);
	    });
	}

    handlePostUpdate(id, post) {
    //sends the posts id and new text to ou1 api
    $.ajax({
      method: 'PUT',
			url: `/api/cities/${this.props.routeParams.cityId}/posts/${this.props.routeParams.postId}`,
      data: post
    })
    .then(res => {
      console.log(res);
    }, err => {
      console.log(err);
    })
  }


	render() {

		const targetPost = this.state.posts.map(post => post.cityName)

		const testPost = this.state.posts[0]

		console.log('targetPost is: ', testPost)
		console.log('this state POSTS', this.state.posts)

		return(
			<div>
				<PostList
					posts={this.state.posts}
					onPostDelete={this.handlePostDelete}
					onPostUpdate={this.handlePostUpdate} />
				<CreatePostForm
       		onCreatePostFormSubmit={this.handleNewPostSubmit}
					cityName={this.props.routeParams.cityId} />
      </div>
		)
	}
}

export default PostsContainer;
