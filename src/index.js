import React from 'react';
import { render } from 'react-dom';
import App from './App';
import { BrowserRouter, Route } from 'react-router-dom';
import './index.css';

render(
    <BrowserRouter basename='/react-ecommerce'>
        <Route component={App}/>
    </BrowserRouter>, document.getElementById('root')
);