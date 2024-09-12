import { call, put, all, takeLatest } from 'redux-saga/effects';
// import { toast } from 'react-toastify';
import * as actions from './actions';
import * as types from '../types';
import axios from '../../../services/axios';
import { toast } from 'react-toastify';
import { get } from 'lodash';

function* loginRequest(payload) {
  try {
    const response = yield call(axios.post, '/tokens', payload);
    yield put(actions.loginSuccess({ ... response.data }));

    toast.success('Login feito com sucesso.');

    axios.defaults.headers.Authorization = `Bearer ${response.data.token}`;


  } catch(e) {
    toast.error('Usuário ou senha inválidos.');

    yield put(actions.loginFailure());
  }
}

function persistRehydrate({ payload }) {
  const token = get(payload, 'auth.token', '');
  if (!token) return;

  axios.defaults.headers.Authorization = `Bearer ${token}`;
}

function registerRequest({ payload }) {
  const { id, nome, email, password } = payload;
  console.log();
}

export default function* rootSaga() {
  yield all([
    takeLatest(types.LOGIN_REQUEST, loginRequest),
    takeLatest(types.PERSIST_REHYDRATE, persistRehydrate),
    takeLatest(types.REGISTER_REQUEST, registerRequest)
  ]);
}
