import { all } from 'redux-saga/effects';

import examppleSagas from './example/sagas';

export default function* rootSagas() {
  yield all([
    examppleSagas(),
  ]);
}
