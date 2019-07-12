import React, { Component } from 'react';
import Layout from './components/Layout';
import Landing from './components/Landing';
import Products from './components/Products';
import Cart from './components/Cart';
import Login from './components/Login';
import Signup from './components/Signup';
import { Route } from 'react-router-dom';
import Context from './context';

import './App.css';

class App extends Component {
    state = {
        cart: []
    }

    handleAddProduct = (watch) => {
        const product = this.state.cart.find(product => product.name === watch.name);
        if(!product) {
            this.setState(prevState => ({
                cart: prevState.cart.concat({...watch, quantity: 1})
            }))
        } else {
            this.setState(prevState => ({
                cart: prevState.cart.map(product => {
                    return product.name === watch.name 
                    ? {
                    ...product, 
                    quantity: product.quantity + 1 
                    } 
                    : product
                })
            }))
        }
    }

    handleChangeQuantity = (e, watch) => {
        const target = e.target; //prevent nullifying of e object. The alternative will be to use e.persist()
        this.setState(prevState => ({
            cart: prevState.cart.map(prod => (
                prod.name === watch.name ? {...prod, quantity: parseInt(target.value, 10)} : prod
            ))
        }))
    }

    handleDeleteProduct = (name) => {
        this.setState(prevState => ({
            cart: prevState.cart.filter(prod => prod.name !== name )
        }))
    }

    handleOrderProduct = () => {
        alert('Congratulations! Your order has been placed!');
        this.setState({
            cart: []
        })
    } 

    render() {
        const { location: { pathname } } = this.props;
        //quantity of products that will be in cart(the number next to the cart icon)
        const quantity = this.state.cart.reduce((acc, product) => acc + product.quantity, 0); 
        return (
            <div className="App">
                <Layout pathname={pathname} quantity={quantity}>
                    <Route exact path='/' component={Landing} />
                    <Route path='/login' component={Login} />
                    <Route path='/signup' component={Signup} />
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