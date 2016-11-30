import React from 'react'
import { Route, IndexRoute, browserHistory, Redirect } from 'react-router'

import MainContainer from '../containers/MainContainer'
import HomeContainer from '../containers/HomeContainer'
import DetailContainer from '../containers/DetailContainer'

import store from '../config/store'
import { isLoginRes, goToLoginPage, getCookie } from 'UtilsHelper'
import { APPIDCOOKIE } from 'CommonVal'
import { getUser, afterLogin, beginLogin } from 'UserAction'


export default (store) => {

  return (
      <Route path='/' component={MainContainer}>
        <IndexRoute component={HomeContainer} />
        <Route path='callback' component={HomeContainer} />
        <Route path='detail' component={DetailContainer} />
        <Redirect from='*' to='/' />
      </Route>
  );
};

