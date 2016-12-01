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

export function getObjectValues(datas){
  return Object.keys(datas).map( key => datas[key] )
}