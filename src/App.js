import React, { Component } from 'react';
import Layout from './components/Layout';
import Landing from './components/Landing';

import './App.css';

class App extends Component {
    render() {
        return(
            <div className="App">
                <Layout>
                    <Landing />
                </Layout>
            </div>
        )
    }
}

export default App;