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
    state = {
        emailError: "",
        passwordError: ""
    }

    handleValidation = (e) => {
        if(e.target.name === 'email') {
            const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
            if(!emailRegex.test(this.props.email)) {
                this.setState({
                    emailError: 'Enter a valid email format'
                })
            } else {
                this.setState({
                    emailError: ''
                }) 
            }
        }

        if(e.target.name === 'password') {
            if(this.props.password.length < 6) {
                this.setState({
                    passwordError: 'Password must be at least 6 characters'
                })
            } else {
                this.setState({
                    passwordError: ''
                })
            }
        }
    }

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
                        error={this.state.emailError ? true : false}
                        value={email}
                        name="email"
                        onChange={onChange('email')}
                        onBlur={this.handleValidation}
                        label={this.state.emailError ? this.state.emailError : "Email"}
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
                        error={this.state.passwordError ? true : false}
                        value={password}
                        name="password"
                        onChange={onChange('password')}
                        onBlur={this.handleValidation}
                        label={this.state.passwordError ? this.state.passwordError : "Password"}
                        type="password"
                        margin="normal"
                        fullWidth
                    />
                    <br />
                    <Button
                        classes={{
                            root: classes.button
                        }} 
                        variant="contained"
                        disabled={this.state.emailError || this.state.passwordError ? true : false}>
                        Sign up
                    </Button>
                </form>
            </div>
        )
    }
}

export default withStyles(styles)(withControlledForm(Signup));