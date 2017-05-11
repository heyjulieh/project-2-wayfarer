import React, {Component} from 'react'

class ProfileHeader extends Component {
	constructor(props){
		super(props)
		this.state={
			userIMG: '',
			user: ''
		}

	}



	render() {

		return(


			<div className="profile-container col-sm-12 col-md-12 col-lg-12">
				<div className="userSection col-sm-12 col-md-12 col-lg-3">
					<img src={this.state.userIMG}></img>
					<h4 className="postUser">{this.state.user}</h4>
				</div>
				<div>
					<button>Posts</button>
					<button>Account</button>
					<button>Settings</button>
				</div>
			</div>


		)
	}
}

export default ProfileHeader;
