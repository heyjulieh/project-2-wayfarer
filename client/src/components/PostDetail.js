import React, {Component} from 'react'
class PostDetail extends Component {
  constructor(props) {
    super(props)
    this.state={
        cityName: this.props.post.cityName,
        user: this.props.post.user,
        userIMG: this.props.post.userIMG,
        date: this.props.post.date,
        title: this.props.post.title,
        text: this.props.post.text,
        editMode: false
    }
    this.deletePost = this.deletePost.bind(this)
    this.updatePost = this.updatePost.bind(this);
    this.handleUpdatePost = this.handleUpdatePost.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
  }

  handleInputChange(e) {
    if (e.target.name === 'title') {
        this.setState({ title: e.target.value });
    }
    if (e.target.name === 'text') {
        this.setState({ text: e.target.value });
    }
  }

  deletePost(e) {
    let targetPost = this.state;
    e.preventDefault();
    var result = confirm("Are you sure you want to delete this post?");
    if (result) {
      this.props.onPostDelete(targetPost);
    }
  }

  updatePost(e) {
    e.preventDefault();
    this.setState({editMode: !this.state.editMode});
  }

  handleUpdatePost(e) {
    e.preventDefault();
    let title = this.state.title
    let text = this.state.text
    let targetPost = this.state;

    if (!title || !text) {
      return;
    }
    this.props.onPostUpdate(targetPost);
    this.setState({
        editMode: !this.state.editMode,
        title: '',
        text: '',
        user: this.state.user,
        userIMG: this.state.userIMG,
        date: Date.now()
    })
  }

  render() {
    let currentUser = this.props.currentUser && this.props.currentUser.displayName;
    let postUser = this.props.post.user;
    console.log('currentUser is: ', currentUser);
    console.log('postUser is: ', postUser);
    if(currentUser === this.props.post.user){
      return(
        <div>
          <div className="postCardDetail col-sm-12 col-md-12 col-lg-12">
              <div className="userSection col-sm-12 col-md-3 col-lg-3">
                  <img className="postImage img-circle img-responsive center-block" src={this.props.post.userIMG} alt="user"></img>
                  <h3 className="postUser">{this.props.post.user}</h3>
              </div>
              <div className="postSection col-sm-12 col-md-9 col-lg-9">
                  <h1 className="postTitle">{this.props.post.title}</h1>
                  <h3 className="postCity">{this.props.city}</h3>
                  <p className="postText">{this.props.post.text}</p>
                  <h6 className="postDate">Posted on: {new Date(this.props.post.date).toLocaleString()}</h6>
                  <button className='btn btn-default' onClick={this.updatePost}><span className="glyphicon glyphicon-pencil" aria-hidden="true"></span>EDIT</button>
                  <button className='btn btn-warning' onClick={this.deletePost}><span className="glyphicon glyphicon-trash" aria-hidden="true"></span>DELETE</button>
              </div>
          </div>
          <div>
           { (this.state.editMode)
               ? (<div className="container">
                <div className="form-group row">
                  <form className="cityList-form" onSubmit={ this.handleUpdatePost }>
                    <input
                      className='form-control'
                      type='text'
                      name='title'
                      placeholder={ this.state.title}
                      value={ this.state.title }
                      onChange={ this.handleInputChange } /><br></br>
                    <textarea
                      className='form-control'
                      rows='8'
                      type='text'
                      name='text'
                      placeholder={ this.state.text }
                      value={ this.state.text }
                      onChange={ this.handleInputChange } /><br></br>
                    <input
                      type='submit'
                      className='btn btn-primary'
                      value='Save' />
                  </form>
                </div>
              </div>)
          : null}
        </div>
      </div>
      )
    }
    return(
      <div>
        <div className="postCardDetail col-sm-12 col-md-12 col-lg-12">
          <div className="userSection col-sm-12 col-md-3 col-lg-3">
              <img className="postImage img-circle img-responsive center-block" src={this.props.post.userIMG} alt="user"></img>
              <h3 className="postUser">{this.props.post.user}</h3>
          </div>
          <div className="postSection col-sm-12 col-md-9 col-lg-9">
              <h1 className="postTitle">{this.props.post.title}</h1>
              <h3 className="postCity">{this.props.city}</h3>
              <p className="postText">{this.props.post.text}</p>
              <h6 className="postDate">Posted on: {new Date(this.props.post.date).toLocaleString()}</h6>
          </div>
        </div>
        <div>
      </div>
    </div>
    )
  }
}
export default PostDetail;
