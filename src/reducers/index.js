import {combineReducers} from 'redux';
import { reducer as formReducer } from 'redux-form';
import priceUnit from './PriceUnit';

const reducers = {
  form: formReducer,
  priceUnit
}

const allReducers = combineReducers(reducers);

export default allReducers;
