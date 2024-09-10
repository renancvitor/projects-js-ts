import { configureStore } from '@reduxjs/toolkit';

import reducer from './modules/example/reducer';

const store = configureStore({
  reducer: {
    myReducer: reducer, // Defina com uma chave se for um objeto com vários reducers
  },
});

export default store;
