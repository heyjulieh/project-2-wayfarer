import React from 'react'
import {Route, IndexRoute} from 'react-router'

import Home from '../views/Home'
import CityPostPage from '../views/CityPostPage'
import PostPage from '../views/PostPage'

module.exports = (
  <Route path='/' component={Home}>
    <Route path='/cities' component={CityPostPage}/>
    <Route path='/cities/:cityname/post/:postId' component={CityPostPage}/>
  </Route>
)