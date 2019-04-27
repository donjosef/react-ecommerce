import React, { Component } from 'react';
import Product from './Product';
import { Grid } from '@material-ui/core';
import { products } from '../../products';

class Products extends Component {

    componentDidMount() {
        window.scrollTo(0, 0)
    }

    render() {
        const { classes } = this.props;
        return (
            <Grid container style={{marginTop: '64px'}}>
                {products.map(product => <Product key={product.id} product={product} /> )}
            </Grid>
        )
    }
}


export default Products;
