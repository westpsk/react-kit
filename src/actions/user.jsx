import api from 'ApiHelper'
import * as types from 'ActionType'
import { LOGIN, HOSTNAME, APPIDCOOKIE, DOCKERUCOOKIE } from 'CommonVal'
import { push } from 'react-router-redux'
import { delCookie } from 'UtilsHelper'
import { goToLoginPage } from 'UtilsHelper'

import * as CommonActions from 'CommonAction'
export const showDialog = CommonActions.showDialog

export function beginLogin() {
  return { type: types.MANUAL_LOGIN_USER }
}

export function loginSuccess(info) {
  return {
    type: types.LOGIN_SUCCESS_USER,
    info
  }
}

export function loginError(message) {
  return {
    type: types.LOGIN_ERROR_USER,
    message
  }
}

export function beginLogout() {
  return { type: types.LOGOUT_USER }
}

export function logoutSuccess() {
  return { type: types.LOGOUT_SUCCESS_USER }
}

export function logoutError() {
  return { type: types.LOGOUT_ERROR_USER }
}

const loginWhiteList = {
	'/' : 1
}

/**
 * 需要每次前端存储的isLogin是不准确的，尤其是为false时，因为页面一刷新，重新加载js后，store里的isLogin一定是false(默认是false)
 * 此时需要重新获取服务端的真实状态
 * 整站跳转登录页：
	1. 用户主动登录--首页--HeaderHome(也是唯一的地方，直接跳转内网登录url即可)
  2. 需要登录权限--detail路由检测
  		（1）首先获取后端登录信息--getUser()
  		 (2) 有登录信息，将信息存在store中，并返回true
  		 (3) 没有登录信息，返回false, 由路由处跳转内网登录页
  		 （3.1）跳转登录页之后，将sid传给后端，由后端判断是否登录成功--afterLogin()
**/

export function getUser(){
	return (dispatch, getStore) => {
		return api.getUser().then(res => {
			if(res.code == 1){
				
				return Promise.resolve( dispatch(loginSuccess(res.data)) ).then( () => {
						return true
				})
			}else{
				return false
			}
		},
		() => {
			return false
		}).catch(function(error){
          dispatch(showDialog({
                visible: true,
                title: error
              }))
          })
	}
}


export function afterLogin(nextQuery) {
	const { orig, sid } = nextQuery
	return (dispatch, getStore) => {

		let data = {sid: sid}
		return api.login(data).then(res => {
			if(res.code == 1){
				return Promise.resolve( dispatch(loginSuccess(res.data)) )
								.then( () => {
									// delCookie(DOCKERUCOOKIE)
									// setCookie(DOCKERUCOOKIE, sid )
									return true
								})
			}else if(res.code == -1){
				return Promise.resolve( dispatch(loginError(res.message)) )
								.then( () => {
									return Promise.resolve(
										dispatch(showDialog({
										  visible: true,
										  title: '',
										  msgArr: ['登录失败']
										}))
									).then( () => {
										return false
									})	
								})
			}
		}).catch(function(error){
          dispatch(showDialog({
                visible: true,
                title: error
              }))
          })
	}
}

/**
 * [logout description]
 * 用户退出即清空相关cookie，如appid
 */
export function logout() {
	return (dispatch, getStore) => {

		return Promise.resolve(
			dispatch( beginLogout() )
		).then( () => {
			
			return api.logout().then( (res) => {
				if(res.code == 1){
					
					return Promise.resolve( dispatch(logoutSuccess()) )
									.then(() => {
										delCookie(APPIDCOOKIE)
										
										return Promise.resolve( dispatch(push('/')) )
									})
				}else{
					return Promise.resolve( dispatch(logoutError(res.message) ) ).then( () => {
							return Promise.resolve(
								dispatch(showDialog({
								  visible: true,
								  title: '',
								  msgArr: ['退出失败']
								}))
							).then( () => {
								return false
							})		
					})
				}
			}).catch(function(error){
          dispatch(showDialog({
                visible: true,
                title: error
              }))
          })
		})
	}
}