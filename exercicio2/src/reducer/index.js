import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import cadastroReducer from './cadastroReducer';

const rootReducer = combineReducers ({
  loginReducer,
  cadastroReducer,
});

export default rootReducer;