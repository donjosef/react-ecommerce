import React from 'react';
import { useControlledForm } from '../../hooks/useControlledForm';
import Spinner from '../Spinner';
import { TextField, Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import { login } from '../../store/actions/login';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

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
    },
    submitLink: {
        textDecoration: 'none'
    }
});


function Login(props) {
    const { email, password, onChangeEmail, onChangePassword } = useControlledForm()

    const handleLogin = (e) => {
        e.preventDefault();
        props.onLogin(email, password);
    }

    const { classes, loginLoading, loginError, loggedIn } = props;
    let form = (
        <form className={classes.form} onSubmit={handleLogin}>
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
                onChange={(e) => onChangeEmail(e.target.value)}
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
                onChange={(e) => onChangePassword(e.target.password)}
                label="Password"
                type="password"
                margin="normal"
                fullWidth
            />
            <br />
            <Button
                classes={{
                    root: classes.submitBtn
                }} variant="contained"
                type='submit'>
                Login
            </Button>
            {loginError && <p style={{ color: 'red' }}>{loginError.response.data.error.message}</p>}
        </form>
    )

    if (loginLoading) {
        form = <Spinner />
    }

    return (
        <div className="auth-form">
            {loggedIn && <Redirect to='/' />}
            {form}
            {!loginLoading && (
                <div className="auth-form__register-now">
                    <small>Don't have an account?</small>
                    <Link to="/signup" className={classes.submitLink}>
                        <Button
                            classes={{
                                root: classes.submitBtn
                            }} variant="contained">
                            Click here to register
                        </Button>
                    </Link>
                </div>
            )}
        </div>
    )

}

const mapStateToProps = state => ({
    loginLoading: state.loading,
    loginError: state.error,
    loggedIn: state.token !== null
})

const mapDispatchToProps = dispatch => ({
    onLogin: (email, password) => dispatch(login(email, password))
})

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Login));