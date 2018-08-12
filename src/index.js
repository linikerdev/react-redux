import React from 'react'
import ReactDOM from 'react-dom'
import './custom.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router } from 'react-router-dom'

import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'

import reducers from './reducers'

import App from './App'
import registerServiceWorker from './registerServiceWorker'

import promise from 'redux-promise'
import multi from 'redux-multi'
import thunk from 'redux-thunk'

const store = applyMiddleware(
  thunk,
  multi,
  promise
)(createStore)(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
  , document.getElementById('root'))
registerServiceWorker()
