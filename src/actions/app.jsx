import api from 'ApiHelper'
import * as types from 'ActionType'
import { getCookie, setCookie } from 'UtilsHelper'
import { APPIDCOOKIE } from 'CommonVal'
import { push } from 'react-router-redux'
import { browserHistory } from 'react-router'

import * as CommonActions from 'CommonAction'
export const showDialog = CommonActions.showDialog
export const hideDialog = CommonActions.hideDialog
export const getObjectValues = CommonActions.getObjectValues

//
export function receiveApp(apps) {
	return {
		type: types.RECEIVE_APP,
		apps
	}
}

export const getAllApps = () => {
	return (dispatch, getStore) => {
		// api之前需要写return，promise需要层层return，只有最外层的return不行，否则拿到的是undefined
		return api.getAllApps().then(
				console.log(111)
        )
	}
}

