import React from 'react';
import SideNav from '../SideNav';

import { AppBar, Toolbar, Typography, Button, IconButton } from '@material-ui/core';
import { ShoppingCart, Menu } from '@material-ui/icons';
import { withStyles } from '@material-ui/core/styles';
import { unstable_useMediaQuery as useMediaQuery } from '@material-ui/core/useMediaQuery';

const styles = theme => ({
    root: {
        flexGrow: 1
    },
    barBg: {
        background: 'black'
    },
    btnHov: {
        '&:hover': {
            background: 'rgba(255,255,255, 0.1)'
        }
    },
    grow: {
        flexGrow: 1
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
                href="#contacts">
                Contacts
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
        <header className={classes.root}>
            <AppBar className={classes.barBg}>
                <Toolbar>
                    <Typography variant="h5" color="inherit" className={classes.grow}>
                        My ecommerce
                    </Typography>
                    {visibleButtons}
                </Toolbar>
            </AppBar>
        </header>
    )
}

export default withStyles(styles)(Header)
