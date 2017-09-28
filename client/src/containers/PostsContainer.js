import React, {Component} from 'react'
import $ from 'jquery-ajax';
import PostList from '../components/PostList'
import CreatePostForm from '../components/CreatePostForm'
import { auth } from '../utils/firebase'



class PostsContainer extends Component {

	// Research Prop.types
	// Check to see if username is being passed in as a prop

	constructor(props) {
		super(props);
		this.state = {
			currentUser: null,
			loggedIn: false,
			posts: []
		};

		this.loadPostsFromServer = this.loadPostsFromServer.bind(this);
		this.handleNewPostSubmit = this.handleNewPostSubmit.bind(this);
		//this.handlePostSubmit = this.handlePostSubmit.bind(this);
		// this.handlePostDelete = this.handlePosttDelete.bind(this);
		// this.handlePostUpdate = this.handlePostUpdate.bind(this);
		this.handleGetUserData = this.handleGetUserData.bind(this);
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
        console.log('Logged in at Posts Container:', currentUser);
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
		console.log('reached handleNewPostSubmit');
		let posts=this.state.posts;
		console.log('posts is: ', posts);
		let newPost=posts.concat([post]);
		console.log('newPost is: ', newPost)
		this.setState({posts: newPost});
		let currentUser=this.state.currentUser;
		console.log('currentUser of new post is: ', currentUser)

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

		// const targetPost = this.state.posts.map(post => post.cityName)
		//
		// const testPost = this.state.posts[0]
		//
		// console.log('targetPost is: ', testPost)
		console.log('this state POSTS', this.state.posts)
		console.log('userData in PostsContainer is: ', this.state.currentUser)
		console.log('this user is logged in: ', this.state.loggedIn)
		let loggedIn = this.state.loggedIn;
		if(loggedIn){
			return(
				<div>
					<PostList
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
			<div>
				<PostList
					posts={this.state.posts}
					onPostDelete={this.handlePostDelete}
					onPostUpdate={this.handlePostUpdate} />
      </div>
		)
	}
}

export default PostsContainer;
