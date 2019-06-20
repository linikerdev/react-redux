import React from 'react'

import {
  Switch,
  Route,
  // Redirect
} from 'react-router-dom'

// import Todo from './Pages/todo/todo'
import About from './Pages/about/about'

export default props => (
  <Switch>
    {/* <Route path='/todos' component={Todo} /> */}
    <Route path='/about' component={About} />
    {/* <Redirect from='*' to='/todos' /> */}
  </Switch>
)
