import axios from 'axios';
import moment from 'moment';
import { GET_USER } from './types';

export function createUser(user) {
    return async function(dispatch) {
        try {
            const response = await axios.post(`/api/v1/users`, user);
            localStorage.setItem(`${window.location.origin}-token`, response.data.token);
            localStorage.setItem(`${window.location.origin}-token-exp`, moment(moment().add('7', 'days')).format());
            return response;
        } catch(error) {
            console.log(error)
        }
    }
}

export function setUser(user) {
    return async function(dispatch) {
        try {
            dispatch({type: GET_USER, payload: user});
        } catch(error) {
            console.log(error)
        }
    }
}