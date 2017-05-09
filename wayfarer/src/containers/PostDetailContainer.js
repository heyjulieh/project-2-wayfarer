import React, {Component} from 'react'
import PostDetail from '../components/PostDetail'
import Post from '../components/Post'

class PostDetailContainer extends Component {
	constructor() {
		super();
		this.state = {
			posts: [{_id: 12347, cityName: 'SanFrancisco', cityIMG: 'http://whatever', author: 'Sam L.', profileIMG: 'http://whatever', text: 'skdmkas aksmdka na sada masmld asddmasd', date: '10/05/2017'}]
			// need to pull in all Post objects data from API
		}
	}

	render() {
		return(

			<PostDetail
				posts={this.state.posts}
			/>

		)
	}

}



export default PostDetailContainer;
