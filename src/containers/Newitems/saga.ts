import { takeLatest } from 'redux-saga/effects';

import ActionTypes from './constants';




export function* getRepos() {
    // Select username from store
    const requestURL ='https://jsonplaceholder.typicode.com/posts';
  
    try {
      // Call our request helper (see 'utils/request')
    //   const repos = yield call(request, requestURL);
    //   yield put(testDataResponseAction(repos));
    } catch (err) {
    //   yield put(testDataErrorAction(err));
    }
  }
  
  export default function* testpageSaga() {
    // See example in containers/HomePage/saga.js
    yield takeLatest(ActionTypes.ADD_ITEM, getRepos);
  }