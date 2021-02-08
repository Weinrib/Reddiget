import { combineReducers, createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import { PostListState } from './PostList/types';
import postListReducer from './PostList/reducer';
import { fetchListWatchers } from './PostList/sagas';
import { all } from 'redux-saga/effects';


export interface ApplicationState {
    posts: PostListState
};

export const reducers = combineReducers({
    posts: postListReducer
});

const composeEnhancers = composeWithDevTools({
    trace: true,
    traceLimit: 25
});

export const rootSaga = function* root() {
    const watchers = [...fetchListWatchers];
    yield all(watchers);
};

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(reducers, composeEnhancers(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(rootSaga);