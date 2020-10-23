import { actions } from '../actions/shared'

export const authedUser = (state = null, action) => {
    switch(action.type) {
        case actions.setAuthedUser:
            return action.id
        default:
            return state
    }
}