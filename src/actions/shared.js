import * as API from '../utils/api'
import {setAuthedUser} from './authedUser'
import { showLoading, hideLoading } from 'react-redux-loading'
import { addTweet } from './tweets'
import { addTweetToUser } from './users'
const AUTH_USER ="tylermcginnis"

export const actions = {
    populateData: 'populateData',
    toggleLike: 'toggleLike',
    setAuthedUser: 'setAuthedUser',
    addTweet: 'addTweet',
    addTweetToUser: 'addTweetToUser'
}

const populateData = ({tweets, users}) => {
    return {
        type: actions.populateData,
        tweets,
        users
    }
}

export const getData = () => {
    return (dispatch) => {
        dispatch(showLoading())
        API.getInitialData()
        .then((data => { 
            dispatch(populateData(data))
            dispatch(setAuthedUser(AUTH_USER))
            dispatch(hideLoading())
        }))
    }
}

export const handleNewTweet = (info) => {
    return (dispatch) => {
        dispatch(showLoading())
        API.saveTweet(info)
        .then(tweet => {
            dispatch(addTweet(tweet));
            dispatch(addTweetToUser(info.author, tweet.id));
            dispatch(hideLoading())
        })
    }
}