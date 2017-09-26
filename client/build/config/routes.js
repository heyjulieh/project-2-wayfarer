import React from 'react'
import {Route} from 'react-router'
import Home from '../views/Home'
import CityPostPage from '../views/CityPostPage'
import PostPage from '../views/PostPage'
import ProfilePage from '../views/ProfilePage'


module.exports = (
	<div>
  		<Route path='/' component={Home} />
  		<Route path='/user' component={ProfilePage} />
  		<Route path='/cities/:cityId' component={CityPostPage}/>
  		<Route path='/cities/:cityId/posts/:postId' component={PostPage}/>
	</div>
)

// get :uid from nav bar (firebase)
// add :uid to to user route path
