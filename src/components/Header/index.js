import React from 'react';
import SideNav from '../SideNav';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, IconButton } from '@material-ui/core';
import { ShoppingCart, Menu } from '@material-ui/icons';
import { withStyles } from '@material-ui/core/styles';
import { unstable_useMediaQuery as useMediaQuery } from '@material-ui/core/useMediaQuery';

const styles = theme => ({
    root: {
        flexGrow: 1,
        background: 'black'
    },
    btnHov: {
        '&:hover': {
            background: 'rgba(255,255,255, 0.1)'
        }
    },
    grow: {
        flexGrow: 1
    },
    link: {
        textDecoration: 'none',
        color: 'white'
    }
});

const Header = ({ classes, quantity }) => {
    const isMobile = useMediaQuery('(max-width: 500px)');

    let visibleButtons = (
        <>
            <Button
                className={classes.btnHov}
                color="inherit"
                component="a"
                href="#newsletter">
                Newsletter
            </Button>
            <Link to="/products" className={classes.link}>
                <Button
                    className={classes.btnHov}
                    color="inherit">Shop/Products
                </Button>
            </Link>
            <Link to="/cart" className={classes.link}>
                <IconButton className={classes.btnHov} color="inherit">
                    <span style={{fontSize: '0.6em'}}>{quantity ? quantity : null}</span>
                    <ShoppingCart />
                </IconButton>
            </Link>
        </>
    );

    if (isMobile) {
        visibleButtons = <SideNav quantity={quantity}/>
    }

    return (
        <AppBar classes={{ root: classes.root }} >
            <Toolbar>
                <Link to="/" className={`${classes.link} ${classes.grow}`}>
                    <Typography variant="h5" color="inherit">
                        My ecommerce
                    </Typography>
                </Link>
                {visibleButtons}
            </Toolbar>
        </AppBar>
    )
}

export default withStyles(styles)(Header)
