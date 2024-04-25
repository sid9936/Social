import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, compose} from 'redux';
import {applyMiddleware} from 'redux';
import {thunk} from 'redux-thunk';
import App from './App';
import reducers from './reducers';
//import { configureStore } from '@reduxjs/toolkit';

import './index.css';

const store = createStore(reducers, compose(applyMiddleware(thunk)));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
