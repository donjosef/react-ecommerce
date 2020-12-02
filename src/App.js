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
import { connect } from 'react-redux'

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
                    {props.loggedIn && (
                        <Route path='/cart' component={Cart} />
                    )}
                    <Route render={() => <h1 style={{marginTop: 70, paddingLeft: 24}}>Page not found</h1>}/>
                </Layout>
            </CartProvider>
        </div>
    )
}

const mapStateToProps = (state) => ({
    loggedIn: state.token !== null
})

export default connect(mapStateToProps)(App);