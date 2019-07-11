import React from 'react';
import SideNav from '../SideNav';
import NavigationItems from './NavigationItems';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { unstable_useMediaQuery as useMediaQuery } from '@material-ui/core/useMediaQuery';

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

const Header = ({ classes, quantity, pathname }) => {
    const isMobile = useMediaQuery('(max-width: 500px)');

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

export default withStyles(styles)(Header)
