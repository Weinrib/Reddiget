import { Action } from 'redux';
import { Page, Post } from '../../types';

export const FETCH_POST_LIST = "FETCH_POST_LIST";
export const FETCH_POST_LIST_SUCCESS = "FETCH_POST_LIST_SUCCESS";
export const FETCH_POST_LIST_ERROR = "FETCH_POST_LIST_ERROR";

export interface PostListState {
    loading: boolean;
    content: Page<Post>;
};

export interface FetchPostListAction extends Action {
    type: typeof FETCH_POST_LIST;
    payload: null;
};

export interface FetchPostListSuccessAction extends Action {
    type: typeof FETCH_POST_LIST_SUCCESS;
    payload: PostListState
};

export interface FetchPostListErrorAction extends Action {
    type: typeof FETCH_POST_LIST_ERROR;
    payload: null;
};

export type PostListAction =  FetchPostListAction | FetchPostListSuccessAction | FetchPostListErrorAction;