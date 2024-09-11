import * as types from '../types';

const initialState = {
  botaoClicado: true,
};

export default function(state = initialState, action) {
  switch(action.type) {
    case types.BOTAO_CLICADO_SUCCESS: {
      const newState = {... state};
      newState.botaoClicado = newState.botaoClicado ? false : true;
      return newState;
    }

    case types.BOTAO_CLICADO_REQUEST: {
      console.log('Estou fazendo a requisição.');
      return state;
    }

    case types.BOTAO_CLICADO_FAILURE: {
      console.log('Deu erro.');
      return state;
    }

    default: {
      return state;
    }
  }
};
