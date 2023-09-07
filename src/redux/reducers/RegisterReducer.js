import * as actionTypes from '../actions/ActionTypes';

const initialState = {
  isLoading: false,
  error: null,
  registrationData: null,
};

const registrationReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.REGISTRATION_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case actionTypes.REGISTRATION_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: null,
        registrationData: action.data,
      };
    case actionTypes.REGISTRATION_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export default registrationReducer;
