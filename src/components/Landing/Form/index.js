import React, { Component } from 'react';
import { TextField, Button, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import './Form.css';

const styles = theme => ({
    container: {
        width: '50%',
        margin: '50px auto',
        [theme.breakpoints.down('xs')]: {
            width: '90%'
        }
    },
    underline: {
        '&:after': {
            borderBottomColor: 'black',
        },
        '&:hover:before': {
            borderBottomColor: ['rgba(0,0,0,0.42)', '!important'],
        },
    },
    focused: {
        color: ['black', '!important']
    },
    btn: {
        background: 'black',
        color: 'white', 
        marginTop: 20
    },
    btnDisabled: {
        background: '#ccc'
    }
});

class Form extends Component {
    state = {
        name: "",
        email: ""
    }

    handleChange = field => event => {
        this.setState({
            [field]: event.target.value
        })
    }

    submitForm = () => {
        alert('You successfully submitted with these values: ' + this.state.name + ',' + this.state.email )
        this.setState({
            name: "",
            email: ""
        })
    }

    render() {
        const { classes } = this.props;
        return (
            <section className="newsletter" id="newsletter">
                <Typography style={{textAlign: 'center'}} variant="h4">Newsletter</Typography>
                <form className={classes.container}>
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
                        fullWidth
                        type="text"
                        label="Name"
                        value={this.state.name}
                        onChange={this.handleChange('name')}
                        margin="normal"
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
                        fullWidth
                        label="Email"
                        type="email"
                        value={this.state.email}
                        onChange={this.handleChange('email')}
                        margin="normal"
                    />
                    <br />
                    <Button 
                        classes={{
                            root: classes.btn,
                            disabled: classes.btnDisabled
                        }}
                        disabled={!this.state.name || !this.state.email}
                        onClick={this.submitForm}
                        variant="contained"
                        size="medium">
                        Subscribe
                    </Button>
                </form>
            </section>
        )
    }
}

export default withStyles(styles)(Form);