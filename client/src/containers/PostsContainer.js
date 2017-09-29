import React, {Component} from 'react'
import $ from 'jquery-ajax';
import PostList from '../components/PostList'
import CreatePostForm from '../components/CreatePostForm'
import { auth } from '../utils/firebase'

class PostsContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			currentUser: null,
			loggedIn: false,
			posts: [],
			city: []
		};

		this.loadPostsFromServer = this.loadPostsFromServer.bind(this);
		this.handleNewPostSubmit = this.handleNewPostSubmit.bind(this);
		this.handleGetUserData = this.handleGetUserData.bind(this);
		this.loadCityFromServer = this.loadCityFromServer.bind(this);

	}

	loadCityFromServer() {
		$.ajax({
			method: 'GET',
			url: `/api/cities/${this.props.routeParams.cityId}`
		})
		.then( res => this.setState({city: res}))
	}

	loadPostsFromServer(){
    $.ajax({
      method: 'GET',
      url: `/api/cities/${this.props.routeParams.cityId}/posts`
    })
    .then( (res) => {this.setState({posts: res})
		})
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
	componentDidMount() {
		this.loadPostsFromServer();
		this.loadCityFromServer();
		// setInterval(this.loadPostsFromServer, this.props.pollInterval);
		setInterval(this.handleGetUserData, 3000);
	}

  handleGetUserData() {
    var uData = this.state.currentUser;
    () => {
      this.props.onGetUserData(uData)
    }
  }

	handleNewPostSubmit(post){
		let posts=this.state.posts;
		let newPost=posts.concat([post]);
		this.setState({posts: newPost});
		let currentUser=this.state.currentUser;

		$.ajax({
			method: 'POST',
			url: `/api/posts/`,
			data: post
		})
		.then(res => {
			console.log('res is: ', res)
		}, err => {
			console.error(err);
		});
		location.reload();
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
    //sends the posts id and new text to our api
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
		let loggedIn = this.state.loggedIn;
		if(loggedIn){
			return(
				<div>
					<PostList
						city={this.state.city.cityName}
						posts={this.state.posts}
						onPostDelete={this.handlePostDelete}
						onPostUpdate={this.handlePostUpdate} />
					<CreatePostForm
						currentUser={this.state.currentUser}
						loggedIn={this.state.loggedIn}
						onCreatePostFormSubmit={this.handleNewPostSubmit}
						cityName={this.props.routeParams.cityId} />
				</div>
			)
		}
		return(
			<div id="wrapper">
				<PostList
					posts={this.state.posts}
					onPostDelete={this.handlePostDelete}
					onPostUpdate={this.handlePostUpdate} />
      </div>
		)
	}
}

export default PostsContainer;
