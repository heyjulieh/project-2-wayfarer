import React, {Component} from 'react'

class PostDetail extends Component {

	constructor(props) {
		super(props)
		this.state={
			userIMG: '',
	    	user: '',
	    	city: '',
	    	title: '',
	    	text: '',
				editMode: false
		}
		this.updatePost = this.updatePost.bind(this);
		this.handleUpdatePost = this.handleUpdatePost.bind(this)
		this.handleInputChange = this.handleInputChange.bind(this)
		// this.deleteComment = this.deleteComment.bind(this)

  }
	updatePost(e) {
		e.preventDefault();
		this.setState({editMode: !this.state.editMode});
	}

	handleUpdatePost(e) {
		e.preventDefault();
		// let id = this.props.uniqueID;
		let userIMG = this.state.userIMG.trim();
    let user = this.state.user.trim();
    let city = this.state.city.trim();
    let title = this.state.title.trim();
    let text = this.state.text.trim();
    if (!userIMG || !user || !city || !title || !text) {
      return;
		}
		this.props.onPostUpdate();
		// need to include post as a param above

		this.setState ({
			editMode: !this.state.editMode,
			userIMG: '',
	    	user: '',
	    	city: '',
	    	title: '',
	    	text: ''
		})
	}

	handleInputChange(e) {

  	if (e.target.name === 'userIMG') {
  		this.setState({ userIMG: e.target.value });
  	}

  	if (e.target.name === 'user') {
  		this.setState({ user: e.target.value });
  	}

  	if (e.target.name === 'city') {
  		this.setState({ city: e.target.value });
  	}

  	if (e.target.name === 'title') {
  		this.setState({ title: e.target.value });
  	}

  	if (e.target.name === 'text') {
  		this.setState({ text: e.target.value });
  	}

  }

	// deleteComment(e) {

	// 	e.preventDefault();

	// 	let id = this.props.uniqueID
	//     this.props.onPostDelete(id)

	// }

	render() {
		return(

			<div className="postsList container">
				<div className="row">
					<div className="postCard col-sm-12 col-md-12 col-lg-12">
						<div className="userSection col-sm-12 col-md-12 col-lg-3">
							<img src={this.props.post.userIMG}></img>
							<h4 className="postUser">{this.props.post.user}</h4>
						</div>
						<div className="postSection col-sm-12 col-md-12 col-lg-9">
							<h3 className="postTitle"><a href="#">{this.props.post.title}</a></h3>
							<p className="postText">{this.props.post.text}</p>
							<h6 className="postDate">{this.props.post.date}</h6>
						</div>
					</div>

					<button type="submit">Edit</button>
					<button type="submit">Delete</button>

					 { (this.state.editMode)
						 ? (<form onSubmit={ this.handlePostUpdate }>
			 	        <input
			 	          type='text'
			 	          name='userIMG'
			 	          placeholder='Link to your profile image…'
			 	          value={ this.state.userIMG }
			 	          onChange={ this.handleInputChange } />
			 	        <input
			 	          type='text'
			 	          name='user'
			 	          placeholder='Enter your name…'
			 	          value={ this.state.user }
			 	          onChange={ this.handleInputChange } />
			 	        <input
			 	          type='text'
			 	          name='cityName'
			 	          placeholder='Select a city…'
			 	          value={ this.state.city }
			 	          onChange={ this.handleInputChange } />
			 	        <input
			 	          type='text'
			 	          name='title'
			 	          placeholder='Choose a title…'
			 	          value={ this.state.title }
			 	          onChange={ this.handleInputChange } />
			 	        <input
			 	          type='text'
			 	          name='text'
			 	          placeholder='Write your post…'
			 	          value={ this.state.text }
			 	          onChange={ this.handleInputChange } />
			 	        <input
			 	          type='hidden'
			 	          name='date'
			 	          value={Date.now()} />
			 	        <input
			 	          type='submit'
			 	          value='Edit' />
			 	    </form>)
						 : null}
 				</div>
			</div>

		)
	}

}

export default PostDetail;



// <button onClick={this.deletePost}>Delete</button>

	 //		let userIMG = this.state.userIMG,
	 //    let user = this.state.user,
	 //    let cityName = this.state.cityName,
	 //    let title = this.state.title,
	 //    let text = this.state.text
