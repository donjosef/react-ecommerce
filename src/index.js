import React from 'react';
import { render } from 'react-dom';
import App from './App';
import { BrowserRouter, Route } from 'react-router-dom';
import {createStore, applyMiddleware, compose} from 'redux';
import Authentication from './store/reducers/authentication';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(Authentication, composeEnhancers(applyMiddleware(thunk)));



import './index.css';

render(
    <Provider store={store}>
        <BrowserRouter basename='/react-ecommerce'>
            <Route component={App}/>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);