import React from 'react'
import {Route} from 'react-router'
import Home from '../Home'
import CityPostPage from '../views/CityPostPage'
import PostPage from '../views/PostPage'

module.exports = (
  <Route path='/' component={Home}>
    <Route path='/cities/:name' component={CityPostPage}/>
    <Route path='/cities/:name/posts/:_postId' component={PostPage}/>
  </Route>
)