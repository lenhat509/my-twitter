import { actions } from '../actions/shared'

export const tweets = (state = {}, action) => {
    switch(action.type){
        case actions.populateData:
             return {
                ...state,
                ...action.tweets
            }
        case actions.toggleLike:
            const {id, hasLiked, authedUser} = action
            return {
                ...state,
                [id] : {
                    ...state[id],
                    likes: hasLiked === true
                        ? state[id].likes.filter(user => user !== authedUser)
                        : state[id].likes.concat([authedUser])
                }
            }
        case actions.addTweet:
            const { tweet } = action

            let replyingTo = {}
            if(tweet.replyingTo!==null)
                replyingTo = {
                    [tweet.replyingTo]: {
                        ...state[tweet.replyingTo],
                        replies: state[tweet.replyingTo].replies.concat([tweet.id])
                    }
                } 
            return {
                ...state,
                [tweet.id] : {
                    ...tweet
                },
                ...replyingTo
            }
        default:
            return state
    }
}