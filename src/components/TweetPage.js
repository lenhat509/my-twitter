import React, { Component } from 'react';
import Tweet from './Tweet'
import NewTweet from './NewTweet'
import {connect} from 'react-redux'


class TweetPage extends Component {
    render() { 
        const { id, replies } = this.props
        return ( 
            <>
            <h3 className='center'>Tweet Page</h3>
            <Tweet tweetId={id}/>
            <NewTweet id={id}/>
            {replies.length !== 0 && <h3 className="center">Replies:</h3>}
            {replies.map(id => 
                <li key={id}>
                    <Tweet tweetId={id} />
                </li>    
            )}
            </>
         );
    }
}

const mapStateToProps = ({authedUser, tweets, users} , props) =>{
    const {id} = props.match.params
    return {
        id,
        replies: !tweets[id]
            ? []
            : tweets[id].replies.sort((a,b) => tweets[b].timestamp - tweets[a].timestamp),
        authedUser
    }
}
export default connect(mapStateToProps)(TweetPage);