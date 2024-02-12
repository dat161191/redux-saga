import { PayloadAction } from '@reduxjs/toolkit';
import { incrementSaga, incrementSagaSuccess } from './counterSlice';
import { takeEvery, delay, put } from '@redux-saga/core/effects';

function* handleIncrementSaga(action: PayloadAction<number>) {
  console.log('Waiting 2s');
  // wait 2s
  yield delay(2000);
  console.log('waiting done');
  //dispatch action success
  yield put(incrementSagaSuccess(action.payload));
}

export default function* counterSaga() {
  // call func* handleIncrementSaga
  yield takeEvery(incrementSaga.toString(), handleIncrementSaga);
}
