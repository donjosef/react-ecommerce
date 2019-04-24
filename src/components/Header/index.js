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
    link: {
        flexGrow: 1,
        textDecoration: 'none',
        color: 'white'
    }
});

const Header = ({ classes }) => {
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
            <Button className={classes.btnHov} color="inherit" component="a">Shop/Products</Button>
            <IconButton className={classes.btnHov} color="inherit">
                <ShoppingCart />
            </IconButton>
        </>
    );

    if (isMobile) {
        visibleButtons = <SideNav />
    }

    return (
        <AppBar classes={{ root: classes.root }} >
            <Toolbar>
                <Link to="/" className={classes.link}>
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
