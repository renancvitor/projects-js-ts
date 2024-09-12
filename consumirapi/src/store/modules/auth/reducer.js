import * as types from '../types';

const initialState = {
  isLoggedIn: false,
  token: false,
  user: {},
  isLoading: false,
};

export default function(state = initialState, action) {
  switch(action.type) {
    case types.LOGIN_SUCCESS: {
      console.log('RENDER', action.payload);
      const newState = { ...state };
      newState.isLoggedIn = true;
      newState.token = action.payload.token;
      newState.user = action.payload.user;
      newState.isLoading = false;
      return newState;
    }

    case types.LOGIN_FAILURE: {
      const newState = { ...initialState };
      return newState;
    }

    case types.LOGIN_REQUEST: {
      const newState = { ...initialState };
      newState.isLoading = true;
      return newState;
    }

    default: {
      return state;
    }
  }
};