import {combineReducers} from 'redux';
import { reducer as formReducer } from 'redux-form';
import priceUnit from './PriceUnit';
import cashFund from './cashFund';
import auth from './auth'

const reducers = {
  form: formReducer,
  priceUnit,
  auth,
  cashFund
}

const allReducers = combineReducers(reducers);

export default allReducers;
