import { combineReducers } from 'redux';
import exampleReducer from './example/reducer'; // Importar todos os reducers

const rootReducer = combineReducers({
  example: exampleReducer,
  // outros reducers
});

export default rootReducer;
