import React, { Component } from 'react';
import Layout from './components/Layout';
import Landing from './components/Landing';
import Products from './components/Products';
import Cart from './components/Cart';
import Login from './components/Login';
import Logout from './components/Logout';
import Signup from './components/Signup';
import { Route } from 'react-router-dom';
import Context from './context';

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
                    <Context.Provider value={{ 
                        cart: this.state.cart,
                        addProductToCart: this.handleAddProduct 
                        }}>
                        <Route path='/products' component={Products} />
                    </Context.Provider>
                    <Route
                        path='/cart'
                        render={() => (
                            <Cart 
                                cart={this.state.cart} 
                                onChangeQuantity={this.handleChangeQuantity}
                                onDeleteProduct={this.handleDeleteProduct}
                                onOrderProduct={this.handleOrderProduct}/>
                        )}
                    />
                </Layout>
            </div>
        )
    }
}

export default App;