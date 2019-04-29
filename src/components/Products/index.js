import React, { Component } from 'react';
import Product from './Product';
import { Grid } from '@material-ui/core';
import { products } from '../../products';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    container: {
        marginTop: '64px',
        [theme.breakpoints.down('xs')]: {
            marginTop: '56px'
        }
    }
});

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
        const { classes } = this.props;
        return (
            <Grid container className={classes.container}>
                {products.map(product => <Product key={product.id} product={product} />)}
            </Grid>
        )
    }
}


export default withStyles(styles)(Products);
