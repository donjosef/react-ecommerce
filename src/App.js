import React, { Component } from 'react';
import Layout from './components/Layout';
import Landing from './components/Landing';
import Products from './components/Products';
import Cart from './components/Cart';
import Login from './components/Login';
import Logout from './components/Logout';
import Signup from './components/Signup';
import { Route } from 'react-router-dom';
import { CartProvider } from './context';

import './App.css';

function App(props) {

    const { location: { pathname } } = props;
    return (
        <div className="App">
            <CartProvider>
                <Layout pathname={pathname}>
                    <Route exact path='/' component={Landing} />
                    <Route path='/login' component={Login} />
                    <Route path='/signup' component={Signup} />
                    <Route path='/logout' component={Logout} />
                    <Route path='/products' component={Products} />
                    <Route path='/cart' component={Cart} />
                </Layout>
            </CartProvider>
        </div>
    )
}

export default App;