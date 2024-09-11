import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

import reducer from './modules/example/reducer';
import rootSaga from './modules/example/sagas';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    // Defina com uma chave se for um objeto com vários reducers
    myReducer: reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware), // Adicione o sagaMiddleware
});

sagaMiddleware.run(rootSaga);

export default store;
