// import { combineReducers } from 'redux'
// import { reducer as form } from 'redux-form'

import { combineReducers } from 'redux-immutablejs'
import { reducer as form } from 'redux-form/immutable'

import router from './router'
import user from './user'

const reducer = combineReducers({
    form,
    routing: router,
    user,
})

export default reducer