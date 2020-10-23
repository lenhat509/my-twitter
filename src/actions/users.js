import { actions } from './shared'

export const addTweetToUser = (user, tweetId) =>{
    return {
        type: actions.addTweetToUser,
        user,
        tweetId
    }
}