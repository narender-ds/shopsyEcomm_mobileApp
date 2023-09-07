import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import ProductReducer from './ProductReducer';
import registrationReducer from './RegisterReducer';

const rootReducer = combineReducers({
  login: loginReducer,
  product: ProductReducer,
  registration: registrationReducer,});

export default rootReducer;