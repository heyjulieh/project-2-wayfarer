import React, {Component} from 'react'

class CreatePostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userImg: '',
      user: '',
      cityName: '',
      title: '',
      text: '',
      date: Date.now()
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(e) {

  	if (e.target.name === 'userImg') {
  		this.setState({ userImg: e.target.value });
  	}

  	if (e.target.name === 'user') {
  		this.setState({ user: e.target.value });
  	}

  	if (e.target.name === 'cityName') {
  		this.setState({ cityName: e.target.value });
  	}

  	if (e.target.name === 'title') {
  		this.setState({ title: e.target.value });
  	}

  	if (e.target.name === 'text') {
  		this.setState({ text: e.target.value });
  	}

  }

  // handleTextChange(e) {
  // 	  	console.log('handleTextChange ', handleTextChange)

  //   this.setState({ text: e.target.value });
  // }

  // handleSubmit(e) {
  // 	  	console.log('handleSubmit ', handleSubmit)

  //   e.preventDefault();
  //   console.log(`${this.state.author} said "${this.state.text}"`)
  //   //we will be tying this into the POST method in a bit
  //   let author = this.state.author.trim();
  //   let text = this.state.text.trim();
  //   if (!text || !author) {
  //     return;
  //   }
  //   this.props.onCommentSubmit({ author: author, text: text });
  //   this.setState({ author: '', text: '' });
  // }

  render() {
    return (

	    <form onSubmit={ this.handleSubmit }>
	        <input
	          type='text'
	          name='userImg'
	          placeholder='Link to your profile image…'
	          value={ this.state.userImg }
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
	          value={ this.state.cityName }
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
	          value='Post' />
	    </form>
    )
  }
}

export default CreatePostForm;