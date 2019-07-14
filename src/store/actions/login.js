import {authInit, authSuccess, authFail } from './auth';
import axios from 'axios';

export const login = (email, password) => {
    return dispatch => {
        dispatch(authInit())

        const authData = {
            email,
            password,
            returnSecureToken: true
        };

        axios.post('https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=     AIzaSyDC3DgbMfFj-ygGbJ-MoXoS076_kE4h-8Y', authData)
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