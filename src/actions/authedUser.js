import { actions } from './shared'
export const setAuthedUser = (id) => {
    return {
        type: actions.setAuthedUser,
        id
    }
}