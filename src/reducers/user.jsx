import { combineReducers } from 'redux'
import * as types from 'ActionType'
import Immutable from 'immutable'

function isWaiting(state = false, action) {

  switch (action.type) {
  	case types.MANUAL_LOGIN_USER:
    case types.LOGOUT_USER:
      return true

    case types.LOGIN_SUCCESS_USER:
    case types.LOGOUT_SUCCESS_USER:
      return false
    case types.LOGIN_ERROR_USER:
    case types.LOGOUT_ERROR_USER:
      return false

    default:
      return state
  }
}

function isLogin(state = false, action) {
  switch (action.type) {

    case types.LOGIN_SUCCESS_USER:
    case types.LOGOUT_ERROR_USER:
      return true

    case types.LOGIN_ERROR_USER:
    case types.LOGOUT_SUCCESS_USER:
      return false

    default:
      return state
  }
}

function info(state = Immutable.fromJS({}), action){
  switch (action.type) {
    case types.LOGIN_SUCCESS_USER:
      return Immutable.fromJS(action.info)

    default:
      return state
  }
}

export default combineReducers({
  isWaiting,
  isLogin,
  info
})