import React, { Component } from 'react';
import Form from './components/Form'
import Layout from './components/Layout';
import Landing from './components/Landing';
import Products from './components/Products';
import Cart from './components/Cart';
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

    render() {
        const { location: { pathname } } = this.props;
        return (
            <div className="App">
                <Layout>
                    <Route exact path='/' component={Landing} />
                    <Context.Provider value={{ 
                        cart: this.state.cart,
                        addProductToCart: this.handleAddProduct 
                        }}>
                        <Route path='/products' component={Products} />
                    </Context.Provider>
                    <Route
                        path='/cart'
                        render={() => (
                            <Cart cart={this.state.cart}/>
                        )}
                    />
                </Layout>
                {pathname !== '/cart' && <Form />}
            </div>
        )
    }
}

export default App;