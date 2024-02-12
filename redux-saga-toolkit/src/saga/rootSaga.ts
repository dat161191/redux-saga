import counterSaga from 'features/counter/counterSaga';
import { all } from 'redux-saga/effects';
export default function* rootSaga() {
  console.log('Hello Saga');
  yield all([counterSaga()]);
}
