import React from 'react';
import { Grid, Button, Typography, Paper } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { products } from '../../products';
import Reveal from 'react-reveal/Reveal';
import Fade from 'react-reveal/Fade';
import './Products.css';

const styles = {
    paper: {
        position: 'relative',
        height: '60vh'
    }
};

const effects = ['toLeft', 'toRight', 'toTop', 'toBottom'];

const Products = ({ classes }) => {
    return (
        <Grid container>
            {products.map((product, index) => {
                const random = Math.floor(Math.random() * effects.length);
                return (
                    <Grid
                        item
                        key={product.id}
                        xs={12}
                        sm={6}
                        md={4}>
                        <Paper className={classes.paper} square elevation={0}>
                            <Reveal effect={effects[random]}>
                                <div style={{
                                    background: `rgb(
                                        ${Math.random() * (20 * index)}, ${Math.random() * (20 * index)}, ${Math.random() * (20 * index)}
                                    )`
                                }} className="bg-product-transition"></div>
                            </Reveal>
                            <Fade left delay={500}>
                                <div className="product-image">
                                    <img className="product-image__image" src={product.thumbnail} />
                                </div>
                            </Fade>
                            <div className="product-details">
                                <Typography
                                    color="inherit"
                                    gutterBottom
                                    variant="h4">{product.name}
                                </Typography>
                                <Typography
                                    color="inherit"
                                    gutterBottom
                                    variant="body1">{product.description}
                                </Typography>
                                <Typography
                                    color="inherit"
                                    gutterBottom
                                    variant="body1">
                                    Price: <strong>{product.price}</strong>
                                </Typography>
                                <Button size="medium" color="inherit" variant="outlined">Select</Button>
                            </div>
                        </Paper>
                    </Grid>
                )
            })}
        </Grid>
    )
}

export default withStyles(styles)(Products);
