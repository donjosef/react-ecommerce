import React, { Component } from 'react';
import Product from './Product';
import { Grid } from '@material-ui/core';
import { products } from '../../products';

class Products extends Component {

    componentDidMount() {
        window.scrollTo(0, 0)
    }

    shouldComponentUpdate() {
        /*
        every time there is setState inside App (as a consequence of add a product to the cart) a re-render happens. In order to avoid a re-render of Products, and subsequently Product and Dialog, return false.
        If Products would re-render, Product will generate a new random color, with the consequence of changing the random color of Dialog every time i click on add product to cart.
        */
        return false;
    }

    render() {
        return (
            <Grid container style={{marginTop: '64px'}}>
                {products.map(product => <Product key={product.id} product={product} /> )}
            </Grid>
        )
    }
}


export default Products;
