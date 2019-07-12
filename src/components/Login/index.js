import React, { Component } from 'react';
import withControlledForm from '../../hoc/withControlledForm';
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
    submitBtn: {
        background: 'black',
        color: 'white',
        marginTop: 15,
        '&:hover': {
            background: 'rgba(0,0,0,0.85)'
        }
    }
});

class Login extends Component {
    render() {
        const { classes, email, password, onChange } = this.props;
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
                        value={email}
                        onChange={onChange('email')}
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
                        value={password}
                        onChange={onChange('password')}
                        label="Password"
                        type="password"
                        margin="normal"
                        fullWidth
                    />
                    <br />
                    <Button
                        classes={{
                            root: classes.submitBtn
                        }} variant="contained">
                        Login
                    </Button>
                </form>
                <div className="auth-form__register-now">
                    <small>Don't have an account?</small>
                    <Button
                        classes={{
                            root: classes.submitBtn
                        }} variant="contained">
                        Click here to register
                    </Button>
                </div>
            </div>
        )
    }
}

export default withStyles(styles)(withControlledForm(Login));