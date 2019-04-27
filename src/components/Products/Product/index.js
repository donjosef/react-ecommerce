import React from 'react';
import FullScreenDialog from './Dialog';
import { Grid, Paper, Button, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import Reveal from 'react-reveal/Reveal';
import Fade from 'react-reveal/Fade';
import './Product.css';


const styles = {
    paper: {
        position: 'relative',
        height: '60vh'
    }
};

/*List of classes defined in css, which will be applied randomly to Reveal*/
const effects = ['toLeft', 'toRight', 'toTop', 'toBottom'];

const Product = ({ classes, product }) => {
    const random = Math.floor(Math.random() * effects.length);

    return (
        <Grid
            item
            xs={12}
            sm={6}
            md={4}>
            <Paper className={classes.paper} square elevation={0}>
                <Reveal effect={effects[random]}>
                    <div style={{
                        background: `rgb(
                            ${Math.random() * 200}, ${Math.random() * 200}, ${Math.random() * 200}
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
                   <FullScreenDialog product={product} />
                </div>
            </Paper>
        </Grid>
    )
}

export default withStyles(styles)(Product);
