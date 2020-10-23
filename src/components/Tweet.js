import React, { Component } from 'react';
import { connect } from 'react-redux'
import { formatTweet, formatDate} from '../utils/helpers'
import { TiArrowBackOutline } from "react-icons/ti";
import { TiHeartFullOutline } from "react-icons/ti";
import { TiHeartOutline } from "react-icons/ti";
import { handleToggle } from '../actions/tweets'
import { Link , withRouter} from 'react-router-dom'

class Tweet extends Component {

    onParent = (e, id) => {
        e.preventDefault()
        this.props.history.push(`/tweet/${id}`)
    }

    handleLike = (e) => {
        e.preventDefault()
        const {tweet, authedUser, dispatch} = this.props
        dispatch(handleToggle({...tweet, authedUser}))
    }

    render() { 
        const { tweet } = this.props
        if(!tweet) return (<h1>Tweet does not exist</h1>)
        const { name, avatar, timestamp, text, hasLiked, likes, replies,id, parent} = tweet
        return ( 
            <div className='tweet'>
                    <img src={avatar} alt={`Avatar of ${name}`} className='avatar'/>
                    <div className='tweet-info'>
                        <div>
                            <span>{name}</span>
                            <div>{formatDate(timestamp)}</div>
                            {parent && (
                                <button className='replying-to' onClick={(e) => this.onParent(e, parent.id)}>
                                    Replying to @{parent.author}
                                </button>
                            )}
                            <p>{text}</p>
                        </div>
                    
                        <div className='tweet-icons'>
                            <Link to={`/tweet/${id}`}><TiArrowBackOutline className='tweet-icon'/></Link>
                            <span>{ replies !== 0 && replies}</span>
                            <button className='heart-button' onClick={this.handleLike}>
                                { hasLiked  
                                    ? <TiHeartFullOutline className='tweet-icon' color='#e0245e'/> 
                                    : <TiHeartOutline className='tweet-icon'/>}
                            </button>
                            <span>{ likes !== 0 && likes}</span>
                        </div>
                    </div>
            </div>
        );
    }
}
const mapStateToProps = ({tweets, users, authedUser}, {tweetId}) => {
    const tweet = tweets[tweetId];
    const parentTweet = tweet? tweets[tweet.replyingTo]: null
    return {
        authedUser,
        tweet : tweet? formatTweet(tweet, users[tweet.author], authedUser, parentTweet) : null
    }
}

export default withRouter(connect(mapStateToProps)(Tweet));