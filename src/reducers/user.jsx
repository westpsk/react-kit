import { combineReducers } from 'redux'
import * as types from 'ActionType'
import Immutable from 'immutable'

function info(state = Immutable.fromJS({}), action){
  switch (action.type) {
    case types.LOGIN_SUCCESS_USER:
      return Immutable.fromJS(action.info)
    default:
      return state
  }
}

export default combineReducers({
  info
})