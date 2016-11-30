import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Router, browserHistory, useRouterHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import Immutable from 'immutable'
import createRoutes from './config/route'
import { configureStore } from './config/store'
import './style/index.css'

let initialState = Immutable.Map()
const store = configureStore(initialState, browserHistory)

/* Create enhanced history object for router */
const createSelectLocationState = () => {
  let prevRoutingState, prevRoutingStateJS
  return (state) => {

    const routingState = state.get('routing') // or state.routing
    if (typeof prevRoutingState === 'undefined' || prevRoutingState !== routingState) {
      prevRoutingState = routingState
      prevRoutingStateJS = routingState.toJS()
    }
    return prevRoutingStateJS
  }
}

const history = syncHistoryWithStore(browserHistory, store, {
  selectLocationState: createSelectLocationState()
})
const routes = createRoutes(store)

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      {routes}
    </Router>
  </Provider>,
  document.getElementById('app')
)
