import React from 'react';
import { createBrowserHistory } from 'history/createBrowserHistory'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from 'react-router-dom';


import Todo from './todo/todo'
import About from './about/about'

export default props => (
    <Router history={createBrowserHistory}>
        <Switch>
            <Route path='/todos' component={Todo} />
            <Route path='/about' component={About} />
            <Redirect from='*' to='/todos'/>
        </Switch>
    </Router>
)
