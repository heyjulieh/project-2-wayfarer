import React, {Component} from 'react'

import $ from 'jquery-ajax';

import PostList from '../components/PostList'
import Post from '../components/Post'
import CreatePostForm from '../components/CreatePostForm'


class PostsContainer extends Component {

	constructor(props) {
		super(props);
		this.state = { data: [] };
		this.loadPostsFromServer = this.loadPostsFromServer.bind(this);
		this.handleNewPostSubmit = this.handleNewPostSubmit.bind(this);
		this.handlePosttSubmit = this.handlePostSubmit.bind(this);
		this.handlePosttDelete = this.handlePosttDelete.bind(this);
		this.handlePosttUpdate = this.handlePostUpdate.bind(this);


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
	
	loadPostsFromServer(){
    $.ajax({
      method: 'GET',
      url: 'http://localhost:3000/api/cities/:cityId/posts'
    })
    .then( res => this.setState({posts: res}))
  }


  handlePostSubmit(posts) {
      let post = this.state.data;s
      let newPosts = posts.concat([post]);
      this.setState({ data: newPosts });
    $.ajax({
      method:'POST',
      url: 'http://localhost:3000/api/cities/:cityId/posts/:postId',
      data: posts
    })
      .catch(error => {
        console.error('post error', error);
        this.setState({data: posts});
    });
  }
handlePostDelete(id){
    $.ajax({
      method: 'DELETE',
      url: 'http://localhost:3000/api/cities/:cityId/posts/:postId'

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
      url:'http://localhost:3000/api/cities/:cityId/posts/:postId' ,
      data: post
    })
    .then(res => {
      console.log(res);
    }, err => {
      console.log(err);
    })
  }

  componentDidMount() {
    this.loadCommentsFromServer();
    setInterval(this.loadPostsFromServer, this.props.pollInterval);
  }

	render() {
		return(

			<div>
				<PostList 
					posts={this.state.data} 
					onPostDelete={this.handlePostDelete}
					onPostUpdate={this.handlePostUpdate}/>	
				<CreatePostForm 

       				 onCreatePostFormSubmit={ this.handleNewPostSubmit } />
       		</div>
		)
	}
}

export default PostsContainer;
