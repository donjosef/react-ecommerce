import React, { Component } from 'react';
import { Drawer, List, ListItem, Button, IconButton } from '@material-ui/core';
import { Link } from 'react-router-dom';

import { ShoppingCart, Menu } from '@material-ui/icons';

class SideNav extends Component {
    state = {
        open: false
    }

    toggleDrawer = () => {
        this.setState(prevState => ({
            open: !prevState.open
        }))
    }

    render() {
        const { quantity } = this.props;
        const list = (
            <List>
                <ListItem>
                    <Button
                        fullWidth
                        color="inherit"
                        component="a"
                        href="#newsletter">
                        Newsletter
                    </Button>
                </ListItem>
                <ListItem>
                    <Link to='/products' style={{textDecoration: 'none', color: 'black'}}>
                        <Button
                            fullWidth
                            color="inherit"
                            component="a">
                            Shop/Products
                        </Button>
                    </Link>
                </ListItem>
                <ListItem>
                    <Link to='/cart' style={{textDecoration: 'none', color: 'black'}}>
                        <IconButton color="inherit">
                            <span style={{ fontSize: '0.6em' }}>{quantity ? quantity : null}</span>
                            <ShoppingCart />
                        </IconButton>
                    </Link>
                </ListItem>
            </List>
        );

        return (
            <div>
                <IconButton onClick={this.toggleDrawer}>
                    <Menu style={{ color: 'white' }} />
                </IconButton>
                <Drawer anchor="left" open={this.state.open} onClose={this.toggleDrawer}>
                    <div
                        tabIndex={0}
                        role="button"
                        onClick={this.toggleDrawer}
                    >
                        {list}
                    </div>
                </Drawer>
            </div>

        )
    }
}

export default SideNav;