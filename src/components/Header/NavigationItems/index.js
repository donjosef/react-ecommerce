import React from 'react'
import { Button, IconButton } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';

const styles = theme => ({
    forMobile: {
        display: 'flex',
        flexDirection: 'column'
    },
    btnHov: {
        '&:hover': {
            background: 'rgba(255,255,255, 0.1)'
        }
    },
    link: {
        textDecoration: 'none',
        color: 'white'
    },
    linkForMobile: {
        color: 'black',
        textDecoration: 'none',
        padding: '10px 0',
        margin: '10px 0'
    }
});

const NavigationItems = ({
    isNewsletterVisible,
    quantity,
    classes,
    forMobile,
    loggedIn
}) => {
    return (
        <div className={forMobile ? classes.forMobile : null}>
            {isNewsletterVisible && (
                <Button
                    className={classes.btnHov}
                    color="inherit"
                    component="a"
                    href="#newsletter">
                    Newsletter
                </Button>
            )}
            <Link to="/products" className={forMobile ? classes.linkForMobile : classes.link}>
                <Button className={classes.btnHov} color="inherit">Shop/Products</Button>
            </Link>
            {!loggedIn ? (
                <Link to="/login" className={forMobile ? classes.linkForMobile : classes.link}>
                    <Button className={classes.btnHov} color="inherit">Login</Button>
                </Link>
            ) : (
                <Link to="/logout" className={forMobile ? classes.linkForMobile : classes.link}>
                    <Button className={classes.btnHov} color="inherit">Logout</Button>
                </Link> 
            )}
            {loggedIn && (
                <Link to="/cart" className={forMobile ? classes.linkForMobile : classes.link}>
                    <IconButton className={classes.btnHov} color="inherit">
                        <span style={{ fontSize: '0.6em' }}>{quantity ? quantity : null}</span>
                        <ShoppingCart />
                    </IconButton>
                </Link>
            )}
        </div>
    )
}

const mapStateToProps = state => ({
    loggedIn: state.token !== null
});

export default connect(mapStateToProps)(withStyles(styles)(NavigationItems));
