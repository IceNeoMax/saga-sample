import { all, delay, put, takeEvery } from 'redux-saga/effects'
import * as actions from '../actions'


export function* incrementAsync() {
  console.log('inc')
  yield delay(1000)
  yield put({ type: actions.ADD_POSTS })
}

export function* watchIncrementAsync() {
  yield takeEvery('INCREMENT_ASYNC', incrementAsync)
}

// function* deletePosts() {
//   yield delay(1000)
//   yield put(actions.deletePosts())
// }

export default [function* post() {
  yield all([
    watchIncrementAsync()
  ])
}]