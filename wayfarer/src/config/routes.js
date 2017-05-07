import React from 'react'
import {Route} from 'react-router'
import App from '../App'
import CityContainer from '../containers/CityContainer'
import PostsContainer from '../containers/PostsContainer'

module.exports = (
  <Route path='/' component={App}>
    <Route path=`/cities/city/${_cityId}` component={CityContainer}/>
    <Route path=`/cities/city/${_cityId}/${_postId}` component={PostsContainer}/>
  </Route>
)