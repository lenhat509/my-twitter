import * as API from '../utils/api'
import {actions} from './shared'

const toggleLike = ({id, hasLiked, authedUser}) =>{
    return {
        type: actions.toggleLike,
        id,
        hasLiked,
        authedUser
    }
}
export const addTweet = (tweet) => {
    return {
        type: actions.addTweet,
        tweet
    }
}

export const handleToggle = (info) => {
    return (dispatch) => {
        dispatch(toggleLike(info))
        return API.saveLikeToggle(info).then();
    } 
}

