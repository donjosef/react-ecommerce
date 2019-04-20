import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton } from '@material-ui/core';
import ShoppingCart from '@material-ui/icons/ShoppingCart';
import { withStyles } from '@material-ui/core/styles';

const styles = {
    root: {
        flexGrow: 1
    },
    barBg: {
        background: 'black'
    },
    grow: {
        flexGrow: 1
    }
};

const Header = ({classes}) => {
    return (
        <header className={classes.root}>
            <AppBar className={classes.barBg} position="static">
                <Toolbar>
                    <Typography variant="h6" color="inherit" className={classes.grow}>
                        My ecommerce
                    </Typography>
                    <Button color="inherit" component="a">Contacts</Button>
                    <Button color="inherit" component="a">Shop/Products</Button>
                    <IconButton color="inherit">
                        <ShoppingCart />
                    </IconButton>
                </Toolbar>
            </AppBar>
        </header>
    )
}

export default withStyles(styles)(Header);
