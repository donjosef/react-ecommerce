import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logout } from '../../store/actions/logout';
import { Redirect } from 'react-router-dom';

class Logout extends Component {

  componentDidMount() {
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    this.props.onLogout();
  }
    render() {
        return <Redirect to='/' />
    }
}

const mapDispatchToProps = dispatch => ({
    onLogout: () => dispatch(logout())
});

export default connect(null, mapDispatchToProps)(Logout);
