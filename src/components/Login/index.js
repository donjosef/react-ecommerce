import React, { Component } from 'react';
import withControlledForm from '../../hoc/withControlledForm';
import { TextField, Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import { login } from '../../store/actions/login';
import { connect } from 'react-redux';

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


class Login extends Component {

    handleLogin = (e) => {
        e.preventDefault();
        const {email, password} = this.props;
        this.props.onLogin(email, password);
    }
    
    render() {
        const { classes, email, password, onChange } = this.props;
        return (
            <div className="auth-form">
                <form className={classes.form} onSubmit={this.handleLogin}>
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
                        }} variant="contained"
                        type='submit'>
                        Login
                    </Button>
                </form>
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
            </div>
        )
    }
}

const mapStateToProps = props => ({

})

const mapDispatchToProps = dispatch => ({
    onLogin: (email, password) => dispatch(login(email, password))
})

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(withControlledForm(Login)));