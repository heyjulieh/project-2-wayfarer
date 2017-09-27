import React, {Component} from 'react'

class CreatePostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userIMG: '',
      user: '',
      title: '',
      text: '',
      date: Date.now(),
      cityName: this.props.cityName
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
  }

  handleNewPostSubmit(e) {
    e.preventDefault();
    let userIMG = this.state.userIMG.trim();
    let user = this.state.user.trim();
    let title = this.state.title.trim();
    let text = this.state.text.trim();
    let date = this.state.date;
    let cityName = this.props.cityName

    if (!title || !text) {
      return;
    }
    this.props.onCreatePostFormSubmit(
    {	userIMG: userIMG,
    	user: user,
    	title: title,
    	text: text,
      date: date,
      cityName: cityName
    });
    this.setState(
    {	userIMG: userIMG,
    	user: user,
    	title: title,
    	text: text
    });
  }

  render() {
    console.log('this city name is', this.props.cityName)
    return (
      <div className="container">
       <div className="form-group row">
       <h3 className="formheader">Add your post</h3>
  	    <form className="cityList-form" onSubmit={ this.handleNewPostSubmit }>
  	        <input
              className='form-control'
  	          type='text'
  	          name='userIMG'
  	          placeholder='Link to your profile image…'
  	          value={ this.state.userIMG }
  	          onChange={ this.handleInputChange } /><br></br>
  	        <input
              className='form-control'
  	          type='text'
  	          name='user'
  	          placeholder='Enter your name…'
  	          value={ this.state.user }
  	          onChange={ this.handleInputChange } /><br></br>
  	        <input
              className='form-control'
  	          type='text'
  	          name='title'
  	          placeholder='Choose a Title…'
  	          value={ this.state.title }
  	          onChange={ this.handleInputChange } /><br></br>
  	        <textarea
              className='form-control'
              rows='8'
  	          type='text'
  	          name='text'
  	          placeholder='Write your Post.....'
  	          value={ this.state.text }
  	          onChange={ this.handleInputChange } /><br></br>
            <input
              className='form-control'
  	          type='hidden'
  	          name='cityName'
  	          value={ this.props.cityName }
  	          onChange={ this.handleInputChange } />
  	        <button
  	          type='submit'
              className='btn btn-primary'
  	          value='Post'>Submit</button>
  	    </form>
       </div>
     </div>
    )
  }
}

export default CreatePostForm;
