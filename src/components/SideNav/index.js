import React, { Component } from 'react';
import { Drawer, IconButton } from '@material-ui/core';
import NavigationItems from '../Header/NavigationItems';

import { Menu } from '@material-ui/icons';

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
        const { quantity, pathname } = this.props;

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
                        <NavigationItems 
                            isNewsletterVisible={pathname == '/'} 
                            quantity={quantity} 
                            forMobile={true}/>
                    </div>
                </Drawer>
            </div>

        )
    }
}

export default SideNav;