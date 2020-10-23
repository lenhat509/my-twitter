import { actions } from '../actions/shared'

export const users = (state={}, action)=> {
    switch(action.type) {
        case actions.populateData:
            return{
                ...state,
                ...action.users
            } 
        case actions.addTweetToUser:
            const { user, tweetId} = action
            return {
                ...state,
                [user] : {
                    ...state[user],
                    tweets: state[user].tweets.concat([tweetId])
                }
            }
        default:
            return state
    }
}