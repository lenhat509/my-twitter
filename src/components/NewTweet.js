import React, { Component } from 'react';
import serializeForm from 'form-serialize'
import { connect } from 'react-redux'
import { handleNewTweet } from '../actions/shared'
import { Redirect } from 'react-router-dom'
class NewTweet extends Component {
    state = {
        text:'',
        toHome: false
    }
    handleChange = (e) => {
        this.setState({text: e.target.value})
    }
    handleSubmit = (e) => {
        e.preventDefault()
        const { dispatch, authedUser, id } = this.props
        const values = serializeForm(e.target, {hash:true})
        dispatch(handleNewTweet({...values, author: authedUser, replyingTo: id}))
        this.setState({text: '', toHome: id? false: true})

    }
    render() { 
        const {toHome} = this.state

        if(toHome === true)
            return <Redirect to='/'/>

        return (
            <div>
                <h3 className='center'>New Tweet</h3>
                <form className='new-tweet' onSubmit={this.handleSubmit}>
                    <textarea placeholder='Your tweet' name='text' maxLength={200} value={this.state.text} onChange={this.handleChange}/>
                    <button className='btn' disabled={this.state.text ===''}>Submit</button>
                </form>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        authedUser: state.authedUser
    }
}

export default connect(mapStateToProps)(NewTweet);