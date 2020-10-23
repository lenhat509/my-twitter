import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { getData } from '../actions/shared'
import { BrowserRouter, Route }  from 'react-router-dom'
import Dashboard from './DashBoard'
import LoadingBar from 'react-redux-loading'
import NewTweet from './NewTweet'
import TweetPage from './TweetPage'
import NavBar from './Nav'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(getData())
  }
  render() {
    return (
      <BrowserRouter>
        <Fragment>
          <LoadingBar/>
          <div className='container'>
            <NavBar/>
            {this.props.loading?  null : 
              <div>
                <Route exact path='/' component = {Dashboard}/>
                <Route path='/new' component = {NewTweet}/>
                <Route path='/tweet/:id' component={TweetPage}/>
              </div>}
          </div>
        </Fragment>
      </BrowserRouter>
    )
  }
}
const mapStateToProps = ({authedUser}) => ({
  loading: authedUser === null
})

export default connect(mapStateToProps)(App); 