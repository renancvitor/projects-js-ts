import { configureStore } from '@reduxjs/toolkit';

const initialState = {
  botaoClicado: true,
};

const reducer = (state = {initialState}, action) => {
  switch(action.type) {
    case 'BOTAO_CLICADO': {
      const newState = {... state};
      newState.botaoClicado = newState.botaoClicado ? false : true;
      return newState;
    }

    default: {
      return state;
    }
  }
};

const store = configureStore({
  reducer: {
    myReducer: reducer, // Defina com uma chave se for um objeto com vários reducers
  },
});

export default store;
