import React, { Component } from 'react';
import withControlledForm from '../../hoc/withControlledForm';
import { TextField, Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import './Signup.css';

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

class Signup extends Component {
    render() {
        const { classes, email, password, onChange } = this.props;
        console.log('inside Signup', this.props);
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
                            root: classes.button
                        }} variant="contained">
                        Sign up
                    </Button>
                </form>
            </div>
        )
    }
}

export default withStyles(styles)(withControlledForm(Signup));