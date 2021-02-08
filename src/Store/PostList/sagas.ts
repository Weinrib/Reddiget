import { call, fork, ForkEffect, put, takeEvery } from 'redux-saga/effects';
import { fetchPostList } from '../../API/Client';
import { fetchPostListError, fetchPostListSuccess } from './actions';
import { FETCH_POST_LIST } from './types';

function* watchFetchPostList() {
    yield takeEvery(FETCH_POST_LIST, fetchPostListSaga);
};

function* fetchPostListSaga(props: any) {
    try {        
        const {pageBefore, pageAfter} = props.payload;
        const result = yield call(fetchPostList, pageBefore, pageAfter);
        yield put(fetchPostListSuccess(result));
    } catch (error) {
        yield put(fetchPostListError())
    }
};

export const fetchListWatchers: Array<ForkEffect> = [
    fork(watchFetchPostList)
];