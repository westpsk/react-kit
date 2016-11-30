import * as types from 'ActionType'
let initState = {
	visible: false
}

export default function dialog(state = initState, action) {
    switch (action.type) {
        case types.SHOW_DIALOG:
            return action.newstate

        case types.HIDE_DIALOG:
            return initState
            
        default:
            return initState;
    }
}