import { put, takeLatest, all } from 'redux-saga/effects';


// worker saga
function* fetchNews() {
    const json = yield fetch('https://run.mocky.io/v3/f11db7cc-0971-43fe-8d54-820a0bc893a1')
          .then(response => response.json() );
    yield put({ type: "NEWS_RECEIVED", json: json.articles });
}

  // watcher saga
function* actionWatcher() {
      yield takeLatest('GET_NEWS', fetchNews)
}

  //root saga
export default function* rootSaga() {
  yield all([
      actionWatcher(),
  ]);
}