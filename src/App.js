import React, { Component } from 'react';
import Layout from './components/Layout';
import Landing from './components/Landing';
import Products from './components/Products';
import Cart from './components/Cart';
import Login from './components/Login';
import Logout from './components/Logout';
import Signup from './components/Signup';
import { Route } from 'react-router-dom';
import {CartProvider, useCart} from './context';

import './App.css';

class App extends Component {
    
    render() {
        const { location: { pathname } } = this.props;
        const {cart} = useCart(); //custom hook that abstract useContext

        //quantity of products that will be in cart(the number next to the cart icon)
        const quantity = cart.reduce((acc, product) => acc + product.quantity, 0); 
        return (
            <div className="App">
                <Layout pathname={pathname} quantity={quantity}>
                    <Route exact path='/' component={Landing} />
                    <Route path='/login' component={Login} />
                    <Route path='/signup' component={Signup} />
                    <Route path='/logout' component={Logout} />
                    <CartProvider>
                        <Route path='/products' component={Products} />
                    </CartProvider>
                    <CartProvider>
                        <Route path='/cart' component={Cart} />
                    </CartProvider>
                </Layout>
            </div>
        )
    }
}

export default App;