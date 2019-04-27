import React, { Component } from 'react';
import Form from './components/Form'
import Layout from './components/Layout';
import Landing from './components/Landing';
import Products from './components/Products';
import Cart from './components/Cart';
import { Route } from 'react-router-dom';

import './App.css';

class App extends Component {
    state = {
        cart: []
    }

    render() {
       const {location: {pathname}} = this.props;
        return (
            <div className="App">
                <Layout>
                    <Route exact path='/' component={Landing} />
                    <Route path='/products' component={Products} />
                    <Route
                        path='/cart'
                        render={() => (
                            <Cart cart={this.state.cart} />
                        )}
                    />
                </Layout>
                {pathname !== '/cart' &&  <Form />}
            </div>
        )
    }
}

export default App;