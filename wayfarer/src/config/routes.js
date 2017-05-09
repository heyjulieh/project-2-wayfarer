import React from 'react'
import {Route} from 'react-router'

import Home from '../views/Home'
import CityPostPage from '../views/CityPostPage'
import PostPage from '../views/PostPage'

module.exports = (
	<div>
  		<Route path='/' component={Home} />
  		<Route path='/cities/city' component={CityPostPage}/>
  		<Route path='/cities/city/post' component={PostPage}/>
	</div>
)
