import api from 'ApiHelper'
import * as types from 'ActionType'

// for confirm modal box
export function showDialog(newstate) {
	return {
		type: types.SHOW_DIALOG,
		newstate
	}
}

export function hideDialog() {
	return {
		type: types.HIDE_DIALOG
	}
}

//一些浏览器不兼容Object.values fix bug object.values is not a function
// export function getObjectValues(datas){
//   var vals = Object.keys(datas).map(function(key) {
//       return datas[key]
//   })
//   return vals
// }

export function getObjectValues(datas){
  return Object.keys(datas).map( key => datas[key] )
}