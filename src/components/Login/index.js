import React, { Component } from 'react';
import { TextField, Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import './Login.css';

const styles = theme => ({
    form: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%'
    },
    underline: {
        '&:after': {
            borderBottomColor: 'black',
        }
    },
    focused: {
        color: ['black', '!important']
    },
    button: {
        background: 'black',
        color: 'white',
        marginTop: 15
    }
});

class Login extends Component {
    render() {
        const { classes } = this.props;

        return (
            <div className="auth-form">
                <form className={classes.form}>
                    <TextField
                        InputProps={{
                            classes: {
                                underline: classes.underline
                            }
                        }}
                        InputLabelProps={{
                            classes: {
                                focused: classes.focused
                            }
                        }}
                        label="Email"
                        margin="normal"
                        fullWidth
                    />
                    <br />
                    <TextField
                        InputProps={{
                            classes: {
                                underline: classes.underline
                            }
                        }}
                        InputLabelProps={{
                            classes: {
                                focused: classes.focused
                            }
                        }}
                        label="Password"
                        type="password"
                        margin="normal"
                        fullWidth
                    />
                    <br />
                    <Button
                        classes={{
                            root: classes.button
                        }} variant="contained">
                        Login
                    </Button>
                </form>
                <div className="auth-form__register-now">
                    <small>Don't have an account?</small>
                    <Button
                        classes={{
                            root: classes.button
                        }} variant="contained">
                        Click here to register
                    </Button>
                </div>
            </div>
        )
    }
}

export default withStyles(styles)(Login);