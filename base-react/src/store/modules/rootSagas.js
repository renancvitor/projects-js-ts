import { all } from 'redux-saga/effects';

import exampple from './example/sagas';

export default function* rootSagas() {
  return yield all([exampple]);
}
