import { persistStore } from 'redux-persist';
import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

import persistedReducers from './modules/reduxPersist';

// import reducer from './modules/example/reducer';
import rootSaga from './modules/example/sagas';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: persistedReducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignora a verificação de serialização para ações com tipo 'persist/PERSIST'
        ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE', 'persist/REGISTER'],
        // Ignora o estado com propriedades específicas que não são serializáveis
        ignoredPaths: ['persist', 'someOtherPath'],
      },
    }).concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);

export default store;
