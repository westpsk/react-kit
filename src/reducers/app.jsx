import { combineReducers } from 'redux'
import * as types from 'ActionType'
import Immutable from 'immutable'


function byId(state = Immutable.fromJS({}), action) {
  switch (action.type) {
    case types.RECEIVE_APP:
      let apps = Immutable.fromJS( action.apps )
      let appObjs =  apps.reduce((obj, app) => {
                  obj[app.get('id')] = app
                  return obj
                }, {})
      return Immutable.fromJS( appObjs )
    default:
      return state
  }
}

function visibleIds(state = Immutable.fromJS([]), action) {

  switch (action.type) {
    case types.RECEIVE_APP:
      let ids = action.apps.map(app => app.id)
      return Immutable.fromJS( ids )
    default:
      return state
  }
}

export default combineReducers({
  byId,
  visibleIds
})
