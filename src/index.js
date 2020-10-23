import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './components/App'
import middleware from './middlewares'
import reducer from './reducers'
import { createStore } from 'redux'
import { Provider } from 'react-redux'


const store = createStore(reducer, middleware);

ReactDOM.render(
    <Provider store={store}>
         <App />
    </Provider> , document.getElementById('root'))