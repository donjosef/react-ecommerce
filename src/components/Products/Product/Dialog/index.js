import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles';
import {
    Dialog,
    AppBar,
    Button,
    Toolbar,
    IconButton,
    Slide,
    Grid,
    Paper,
    Typography
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import { Close, ShoppingCart } from '@material-ui/icons';
import Context from '../../../../context';

const styles = theme => ({
    appBar: {
        background: 'black'
    },
    link: {
        textDecoration: 'none',
        color: 'white'
    },
    btnHov: {
        '&:hover': {
            background: 'rgba(255,255,255, 0.1)'
        }
    },
    toolBar: {
        justifyContent: 'space-between'
    },
    paper: {
        height: 'calc(100vh - 64px)',
        overflowY: 'hidden',
        padding: 20,
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'flex-start',
        [theme.breakpoints.down('xs')]: {
            height: '55vh'
        }
    },
    button: {
        [theme.breakpoints.down('xs')]: {
            marginTop: '15px'
        }
    },
    img: {
        width: '55%',
        margin: 'auto',
        display: 'block',
        [theme.breakpoints.down('xs')]: {
            width: '40%'
        }
    }

})

function FullScreenDialog() {
    const [isOpen, setisOpen] = React.useState(false);


    const handleClickOpen = () => {
        setIsOpen(true)
    }

    const handleClose = () => {
        setIsOpen(false)
    }


    const { product, classes, bgColor } = props;
    const quantity = context.cart.reduce((acc, product) => acc + product.quantity, 0);
    return (
        <>
            <Button
                size="medium"
                color="inherit"
                variant="outlined"
                onClick={handleClickOpen}>
                Select
                </Button>
            <Dialog
                fullScreen
                open={isOpen}
                TransitionComponent={Slide}>
                <AppBar className={classes.appBar} position="relative">
                    <Toolbar className={classes.toolBar}>
                        <IconButton
                            className={classes.btnHov}
                            color="inherit"
                            onClick={handleClose}>
                            <Close />
                        </IconButton>
                        <Link className={classes.link} to='/cart'>
                            <IconButton className={classes.btnHov} color="inherit">
                                <span style={{ fontSize: '0.6em' }}>{quantity ? quantity : null}</span>
                                <ShoppingCart />
                            </IconButton>
                        </Link>
                    </Toolbar>
                </AppBar>
                <Grid container>
                    <Grid item md={6} sm={6} xs={12}>
                        <Paper
                            style={{ background: bgColor }}
                            className={classes.paper}
                            square
                            elevation={2}>
                            <Typography
                                color="inherit"
                                gutterBottom
                                variant="h4">{product.name}
                            </Typography>
                            <Typography
                                color="inherit"
                                gutterBottom
                                variant="h4">
                                Product id: {product.id}
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
                            <Button
                                className={classes.button}
                                size="medium"
                                color="inherit"
                                variant="outlined"
                                onClick={() => context.addProductToCart(product)}>ADD TO CART</Button>
                            <Button
                                className={classes.button}
                                size="medium"
                                color="inherit"
                                variant="outlined"
                                onClick={handleClose}>SEE MORE PRODUCTS</Button>
                        </Paper>
                    </Grid>
                    <Grid item md={6} sm={6} xs={12}>
                        <Paper
                            style={{ background: bgColor }}
                            className={classes.paper}
                            square
                            elevation={2}>
                            <img
                                className={classes.img}
                                src={product.thumbnail} />
                        </Paper>
                    </Grid>
                </Grid>
            </Dialog>
        </>
    )

}

export default withStyles(styles)(FullScreenDialog);