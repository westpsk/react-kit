import React from 'react'
import { Route, IndexRoute, Redirect } from 'react-router'

import MainContainer from '../containers/MainContainer'
import HomeContainer from '../containers/HomeContainer'

import store from '../config/store'

export default (store) => {

  return (
      <Route path='/' component={MainContainer}>
        <IndexRoute component={HomeContainer} />
        <Route path='callback' component={HomeContainer} />
        <Redirect from='*' to='/' />
      </Route>
  )
}
