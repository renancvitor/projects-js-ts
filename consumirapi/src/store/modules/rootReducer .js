import { combineReducers } from 'redux';
import auth from './auth/reducer'; // Importar todos os reducers

const rootReducer = combineReducers({
  auth,
  // outros reducers
});

export default rootReducer;
