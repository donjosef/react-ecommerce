import * as actionTypes from './actionTypes';
import axios from 'axios';

export const authInit = () => {
    return {
        type: actionTypes.AUTH_INIT
    }
}

export const authSuccess = (token, userId) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        token, 
        userId
    }
}

export const authFail = (error) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error
    }
}

export const auth = (email, password) => {
    return dispatch => {
        dispatch(authInit())

        const authData = {
            email,
            password,
            returnSecureToken: true
        };

        axios.post('https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyDC3DgbMfFj-ygGbJ-MoXoS076_kE4h-8Y', authData)
        .then(res => {
            localStorage.setItem('token', res.data.idToken);
            localStorage.setItem('userId', res.data.localId);
            dispatch(authSuccess(res.data.idToken, res.data.localId))
        })
        .catch(error => {
            dispatch(authFail(error))
        })
    }
}