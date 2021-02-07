import { call, fork, ForkEffect, put, takeEvery } from 'redux-saga/effects';
import { fetchPostListError, fetchPostListSuccess } from './actions';
import { FETCH_POST_LIST } from './types';

function* watchFetchPostList() {
    yield takeEvery(FETCH_POST_LIST, fetchPostListSaga);
};

function* fetchPostListSaga() {
    try {
        const result = yield call(null);
        yield put(fetchPostListSuccess(result));
    } catch (error) {
        yield put(fetchPostListError())
    }
};


export const fetchListWatchers: Array<ForkEffect> = [
    fork(watchFetchPostList)
];