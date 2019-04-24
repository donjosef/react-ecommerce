import React from 'react';
import { Grid, Button, Typography, Paper } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { products } from '../../products';
import './Products.css';

const styles = {
    paper: {
        position: 'relative',
        height: '60vh'
    }
};

const Products = ({ classes }) => {
    return (
        <Grid container>
            {products.map(product => (
                <Grid
                    item
                    key={product.id}
                    xs={12}
                    sm={6}
                    md={4}>
                    <Paper className={classes.paper} square elevation={0}>
                        <div className="bg-product-transition"></div>
                        <div className="product-image">
                            <img className="product-image__image" src={product.thumbnail} />
                        </div>
                        <div className="product-details">
                            <Typography gutterBottom variant="h4">{product.name}</Typography>
                            <Typography gutterBottom variant="body1">{product.description}</Typography>
                            <Typography gutterBottom variant="body1">
                                Price: <strong>{product.price}</strong>
                            </Typography>
                        </div>
                    </Paper>
                </Grid>
            ))}
        </Grid>
    )
}
        
export default withStyles(styles)(Products);
