import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import rootReducer from './example/reducer'; // Certifique-se de que este é o rootReducer combinado

const persistConfig = {
  key: 'REACT-BASE',
  storage,
  whitelist: ['example'], // Lista dos reducers que serão persistidos
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default persistedReducer;
