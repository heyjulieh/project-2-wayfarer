import React, {Component} from 'react'

class Post extends Component {

    render() {
        let formattedDate = new Date(this.props.post.date).toLocaleString();
        let truncatedText = this.props.post.text.substring(0, 350) + '…';
        let postLink = `/cities/${this.props.post.cityName}/posts/${this.props.post._id}`

        return(

            <div className="postCard col-sm-12 col-md-12 col-lg-12">
                <div className="userSection col-sm-12 col-md-3 col-lg-3">
                    <img className="postImage img-circle img-responsive center-block" src={this.props.post.userIMG} alt="user"></img>
                    <h3 className="postUser">{this.props.post.user}</h3>
                </div>
                <div className="postSection col-sm-12 col-md-9 col-lg-9">
                    <h1 className="postTitle">{this.props.post.title}</h1>
                    <p className="postText">{truncatedText}</p>
                    <h5><a href={postLink}>Read more…</a></h5>
                    <h6 className="postDate">Posted on: {formattedDate}</h6>
                </div>
            </div>
        )
    }
}

export default Post;
