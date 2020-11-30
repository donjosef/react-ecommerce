import React, { useState } from 'react';
import Spinner from '../Spinner';
import { useControlledForm } from '../../hooks/useControlledForm';
import { TextField, Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { auth } from '../../store/actions/auth';

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
        marginTop: 15,
        '&:hover': {
            background: 'rgba(0,0,0,0.85)'
        }
    }
});

function Signup(props) {
    const [emailError, setEmailError] = useState('')
    const [passwordError, setPasswordError] = useState('')
    const {email, password, onChangeEmail, onChangePassword} = useControlledForm()

    const handleValidation = (e) => {
        if (e.target.name === 'email') {
            const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

            if (!emailRegex.test(email)) {
                setEmailError('Enter a valid email format')
            } else {
                setEmailError('')
            }
        }

        if (e.target.name === 'password') {
            if (password.length < 6) {
                setPasswordError('Password must be at least 6 characters')
            } else {
                setPasswordError('')
            }
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        props.onAuth(email, password)
    }

    const { classes, authLoading, authError } = props;

    let form = (
        <form className={classes.form} onSubmit={handleSubmit}>
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
                error={emailError ? true : false}
                value={email}
                name="email"
                onChange={(e) => onChangeEmail(e.target.value)}
                onBlur={handleValidation}
                label={emailError ? emailError : "Email"}
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
                error={passwordError ? true : false}
                value={password}
                name="password"
                onChange={(e) => onChangePassword(e.target.value)}
                onBlur={handleValidation}
                label={passwordError ? passwordError : "Password"}
                type="password"
                margin="normal"
                fullWidth
            />
            <br />
            <Button
                classes={{
                    root: classes.button
                }}
                type='submit'
                variant="contained"
                disabled={emailError || passwordError ? true : false}>
                Sign up
            </Button>
            {authError ? <p>{authError.response.data.error.message}</p> : null}
        </form>
    );

    if (authLoading) {
        form = <Spinner />
    }

    return (
        <div className="auth-form">
            {form}
        </div>
    )

}

const mapStateToProps = state => ({
    authLoading: state.loading,
    authError: state.error
});

const mapDispatchToProps = dispatch => ({
    onAuth: (email, password) => dispatch(auth(email, password))
});

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Signup))