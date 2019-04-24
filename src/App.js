import React, { Component } from 'react';
import Layout from './components/Layout';
import Landing from './components/Landing';
import Products from './components/Products';
import { Route } from 'react-router-dom';

import './App.css';

class App extends Component {
    render() {
        return(
            <div className="App">
                <Layout>
                    <Route exact path='/' component={Landing} />
                    <Route path='/products' component={Products} />
                </Layout>
            </div>
        )
    }
}

export default App;