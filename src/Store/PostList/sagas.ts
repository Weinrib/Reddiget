import { call, fork, ForkEffect, put, takeEvery } from 'redux-saga/effects';
import { fetchPostList } from '../../API/Client';
import { fetchPostListError, fetchPostListSuccess } from './actions';
import { DISMISS_POST_LIST, FETCH_POST_LIST } from './types';

function* watchFetchPostList() {
    yield takeEvery(FETCH_POST_LIST, fetchPostListSaga);
};

function* watchDismissPostList() {
    yield takeEvery(DISMISS_POST_LIST, fetchPostListSaga);
};

function* fetchPostListSaga(props: any) {
    try {
        debugger;
        const {pageBefore, pageAfter} = props.payload;
        const result = yield call(fetchPostList, pageBefore, pageAfter);
        yield put(fetchPostListSuccess(result));
    } catch (error) {
        yield put(fetchPostListError(error.message))
    }
};

export const fetchListWatchers: Array<ForkEffect> = [
    fork(watchFetchPostList),
    fork(watchDismissPostList)
];