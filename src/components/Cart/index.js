import React, { Component } from 'react';
import {
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Typography,
    Button
} from '@material-ui/core';
import { Delete } from '@material-ui/icons';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    container: {
        width: '80%',
        margin: '90px auto 64px',
        position: 'relative',
        textAlign: 'center',
        [theme.breakpoints.down('xs')]: {
            margin: '82px auto 64px',
            width: '100%'
        }
    },
    list: {
        padding: '25px 0'
    },
    listItem: {
        background: '#F5F5F5'
    },
    button: {
        background: 'black',
        color: 'white',
        position: 'absolute',
        right: 0,
        [theme.breakpoints.down('xs')]: {
            right: '28px'
        },
        '&:hover': {
            background: 'rgba(0,0,0, 0.8)'
        }
    }
});

const Cart = ({ cart, classes, onChangeQuantity }) => {

    return (
        <section className={classes.container}>
            <Typography variant="h3">
                CART
            </Typography>
            {cart.length === 0 ? 'Your cart is empty' : (
                <>
                    <List className={classes.list}>
                        {cart.map(product => (
                            <ListItem className={classes.listItem}>
                                <ListItemIcon>
                                    <Delete />
                                </ListItemIcon>
                                <ListItemText primary="Name" secondary={product.name} />
                                <ListItemText primary="Price" secondary={product.price} />
                                <ListItemText
                                    primary="Quantity"
                                    secondary={
                                        <input
                                            style={{ width: '50%' }}
                                            type="number"
                                            value={product.quantity}
                                            onChange={onChangeQuantity} />
                                    } />
                                <ListItemText primary="Total" secondary={product.quantity * product.price} />
                            </ListItem>
                        ))}
                    </List>
                    <Button
                        className={classes.button}
                        size="medium"
                        variant="contained">
                        Order
                </Button>
                </>
            )}
        </section>
    )

}

export default withStyles(styles)(Cart);