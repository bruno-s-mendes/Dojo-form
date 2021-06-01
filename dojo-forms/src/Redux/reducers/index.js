import { combineReducers } from 'redux';
import formReducer from './formReducer';

const rootReducer = combineReducers ({
  cadastro: formReducer,
});

export default rootReducer;
