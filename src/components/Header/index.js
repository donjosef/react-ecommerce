import React, { useEffect } from 'react';
import SideNav from '../SideNav';
import NavigationItems from './NavigationItems';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { unstable_useMediaQuery as useMediaQuery } from '@material-ui/core/useMediaQuery';
import { connect } from 'react-redux';
import { authSuccess } from '../../store/actions/auth';
import {useCart} from '../../context';

const styles = theme => ({
    root: {
        flexGrow: 1,
        background: 'black'
    },
    grow: {
        flexGrow: 1
    },
    link: {
        textDecoration: 'none',
        color: 'white'
    }
});

const Header = ({ classes, pathname, onLogin }) => {
    const isMobile = useMediaQuery('(max-width: 630px)');
    const { cart } = useCart();
    
    //quantity of products that will be in cart(the number next to the cart icon)
    const quantity = cart.reduce((acc, product) => acc + product.quantity, 0);

    useEffect(() => {
        if (localStorage.getItem('token')) {
            const token = localStorage.getItem('token');
            const userId = localStorage.getItem('userId');
            onLogin(token, userId);
        }
    }, [])

    let visibleButtons = (
        <NavigationItems
            isNewsletterVisible={pathname == '/'}
            quantity={quantity}
            forMobile={false}
        />
    )

    if (isMobile) {
        visibleButtons = <SideNav pathname={pathname} quantity={quantity} />
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

const mapDispatchToProps = dispatch => ({
    onLogin: (token, userId) => dispatch(authSuccess(token, userId))
});

export default connect(null, mapDispatchToProps)(withStyles(styles)(Header))
