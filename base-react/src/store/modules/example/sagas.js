import { call, put, all, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import * as actions from './actions';
import * as types from '../types';

const requisicao = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      reject();
    }, 2000);
});

function* exampleRequest() {
  try {
    yield call(requisicao);
    yield put(actions.clicaBotaoSuccess());
  } catch {
    toast.error('Deu erro.');
    yield put(actions.clicaBotaoFailure());
  }
}

export default function* rootSaga() {
  yield all([
    takeLatest(types.BOTAO_CLICADO_REQUEST, exampleRequest) // Observa a ação BOTAO_CLICADO_REQUEST e chama exampleRequest
  ]);
}
