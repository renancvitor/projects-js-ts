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

  try {
    if(id) {
      yield call(axios.put, '/users', {
        email,
        nome,
        password: password || undefined,
      });
      toast.success('Conta alterada com sucesso');
      yield put(actions.registerUpdateSuccess({ nome, email, password }));
    } else {
      yield call(axios.put, '/users', {
        email,
        nome,
        password,
      });
      toast.success('Conta criada com sucesso');
      yield put(actions.registerCreatedSuccess({ nome, email, password }));
    }

  } catch(e) {
    const errors = get(e, 'response.data.error', []);
    const status = get(e, 'responde.status', 0);

    if(status === 401) {
      toast.error('Você precisa fazr login novamente');

      yield put(actions.loginFailure());
    }

    if (errors.length > 0) {
      errors.map(error => toast.error(e));
    } else {
      toast.error('Erro desconhecido');
    }

    return yield put(actions.registerFailure);
  }

  return 1;
}

export default function* rootSaga() {
  yield all([
    takeLatest(types.LOGIN_REQUEST, loginRequest),
    takeLatest(types.PERSIST_REHYDRATE, persistRehydrate),
    takeLatest(types.REGISTER_REQUEST, registerRequest)
  ]);
}
