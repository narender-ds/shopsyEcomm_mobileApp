import {LOGIN_SUCCESS, LOGOUT,LOGIN_REQUEST,LOGIN_FAILURE} from './ActionTypes';
import AuthService from '../../services/AuthService';
import axios from 'axios';

const loginRequest=()=>({
  type :LOGIN_REQUEST
})
const loginSuccess=(data)=>({
  type:LOGIN_SUCCESS,
  data

})
const loginFailure=(error)=>({
  type:LOGIN_FAILURE,
  error
})
export const login = (userData) => {
  return (dispatch) => {
    dispatch(loginRequest());

    axios
      .post("http://192.168.9.113:5000/login", userData)
      .then((response) => {
        dispatch(loginSuccess(response.data));
      })
      .catch((error) => {
        console.log('error', error)
        dispatch(loginFailure(error));
      });
  };
};
export const logout = () => async dispatch => {
  return AuthService.logOut().then(response => {
    if (response.status === 'success') {
      dispatch({
        type: LOGOUT,
      });
      Promise.resolve();
      return response;
    }
  });
};

