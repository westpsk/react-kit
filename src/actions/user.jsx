import api from 'ApiHelper'
import * as types from 'ActionType'

function loginSuccess(userInfo) {
  return {
    type: types.LOGIN_SUCCESS_USER,
    userInfo
  }
}

function loginError(errorInfo) {
  return {
    type: types.LOGIN_ERROR_USER,
    errorInfo
  }
}

export const login = () => {
  return (dispatch, getStore) => {
    return api.login().then( res => {
      if(res.code == 1){
        return dispatch(loginSuccess(res.data))
      }else{
        return dispatch(loginError(res.data))
      }
    })
  }
}