import React from 'react';
import ReactDOM from 'react-dom';
import './custom.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router } from 'react-router-dom';

import { Provider } from 'react-redux'
import { createStore } from 'redux'

import reducers from './reducers'

import App from './App';
import registerServiceWorker from './registerServiceWorker';


const store = createStore(reducers)

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
