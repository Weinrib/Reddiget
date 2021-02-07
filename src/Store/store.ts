import { combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Post } from "../types";

export interface PostListState {
    loading: boolean;
    data: Array<Post>
};

export interface ApplicationState {
    posts: PostListState;
    selectedPost: Post;
};

export const reducers = combineReducers({});


const composeEnhancers = composeWithDevTools({
    trace: true,
    traceLimit: 25
})

export const store = createStore(reducers, composeEnhancers());