import React, { Component } from 'react';
import { Drawer, List, ListItem, ListItemText, Button, IconButton } from '@material-ui/core';

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
        const list = (
            <List>
                <ListItem>
                    <Button
                        fullWidth
                        color="inherit"
                        component="a">
                        Contacts
                    </Button>
                </ListItem>
                <ListItem>
                    <Button
                        fullWidth
                        color="inherit"
                        component="a">
                        Shop/Products
                    </Button>
                </ListItem>
                <ListItem>
                    <IconButton color="inherit">
                        <ShoppingCart />
                    </IconButton>
                </ListItem>
            </List>
        );

        return (
            <div>
                <IconButton onClick={this.toggleDrawer}>
                    <Menu style={{ color: 'white' }} />
                </IconButton>
                <Drawer anchor="right" open={this.state.open} onClose={this.toggleDrawer}>
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