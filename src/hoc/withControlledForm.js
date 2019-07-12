import React, { Component } from 'react';

const withControlledForm = (WrappedComponent) => {
    return class extends Component {
        state = {
            email: '',
            password: ''
        }

        handleChangeValue = input => e => {
            this.setState({
                [input]: e.target.value
            })
        }

        render() {
            return (
                <WrappedComponent 
                    email={this.state.email}
                    password={this.state.password}
                    onChange={this.handleChangeValue}
                    {...this.props} />
            )
        }
    }
}

export default withControlledForm;