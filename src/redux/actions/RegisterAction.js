import axios from 'axios';
import {REGISTRATION_REQUEST,REGISTRATION_SUCCESS,REGISTRATION_FAILURE} from '../actions/ActionTypes';

export const registrationRequest = () => ({
  type: REGISTRATION_REQUEST,
});

export const registrationSuccess = (data) => ({
  type: REGISTRATION_SUCCESS,
  data,
});

export const registrationFailure = (error) => ({
  type: REGISTRATION_FAILURE,
  error,
});
export const registerUser = (userData) => {
    return (dispatch) => {
      dispatch(registrationRequest());
  
      axios
        .post("http://192.168.9.113:5000/addUser", userData)
        .then((response) => {
            console.log('response', response)
          dispatch(registrationSuccess(response.data));
        })
        .catch((error) => {
            console.log('error', error.response.data)
          dispatch(registrationFailure(error.response.data));
        });
    };
  };
