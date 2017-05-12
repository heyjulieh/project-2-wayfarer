import React, {Component} from 'react'

class CreatePostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userIMG: '',
      user: '',
      title: '',
      text: '',
      date: Date,
      userID: '',
      city: ''
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleNewPostSubmit = this.handleNewPostSubmit.bind(this);
  }

  handleInputChange(e) {

  	if (e.target.name === 'userIMG') {
  		this.setState({ userIMG: e.target.value });
  	}

  	if (e.target.name === 'user') {
  		this.setState({ user: e.target.value });
  	}

  	if (e.target.name === 'title') {
  		this.setState({ title: e.target.value });
  	}

  	if (e.target.name === 'text') {
  		this.setState({ text: e.target.value });
  	}

  	if (e.target.name === 'date') {
  		this.setState({ date: e.target.value });
    }
      if (e.target.name === 'userID') {
      this.setState({ userID: e.target.value });
    }

  }


  handleNewPostSubmit(e) {

    e.preventDefault();
    //we will be tying this into the POST method in a bit
    let userIMG = this.state.userIMG.trim();
    let user = this.state.user.trim();
    let title = this.state.title.trim();
    let text = this.state.text.trim();
    let date = this.state.date;
    let userID = this.state.userID.trim();




    if (!userIMG || !user || !title || !text || !date || !userID ) {
      return;
    }
    this.props.onCreatePostFormSubmit(
    {	userIMG: userIMG,
    	user: user,
    	title: title,
    	text: text,
      date: Date,
      userID: userID,
    });
    this.setState(
    {	userIMG: userIMG,
    	user: user,
    	title: title,
    	text: text,
      date: Date,
      userID: userID,
    });

    console.log('logging this.state: ', this.state);
  }

  render() {
    return (

	    <form onSubmit={ this.handleNewPostSubmit }>
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
	          name='title'
	          placeholder='Choose a Title…'
	          value={ this.state.title }
	          onChange={ this.handleInputChange } />
	        <input
	          type='text'
	          name='text'
	          placeholder='Write your Post.....'
	          value={ this.state.text }
	          onChange={ this.handleInputChange } />
          <input
            type='hidden'
            name='date'
            value={Date.now()} />
	        <input
	          type='text'
	          name='userID'
	          placeholder='firebase userID'
	          value={ this.state.userID}
	          onChange={ this.handleInputChange } />
          <input
            type='hidden'
            name='city'
            value={ this.props.city } />
	        <input
	          type='submit'
	          value='Post' />
	    </form>
    )
  }
}

export default CreatePostForm;
