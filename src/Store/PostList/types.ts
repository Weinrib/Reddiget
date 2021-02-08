import { Action } from 'redux';
import { Page, Post } from '../../types';

export const FETCH_POST_LIST = "FETCH_POST_LIST";
export const FETCH_POST_LIST_SUCCESS = "FETCH_POST_LIST_SUCCESS";
export const FETCH_POST_LIST_ERROR = "FETCH_POST_LIST_ERROR";

export const IMAGE_IS_NSFW = 'nsfw';
export const IMAGE_DEF = 'default';
export const IMAGE_SELF = 'self';

export const IMAGES_TO_BE_REPLACED_WITH_PLACEHOLDER = [IMAGE_IS_NSFW, IMAGE_DEF, IMAGE_SELF];

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

export type PostListAction =  FetchPostListAction | FetchPostListSuccessAction | FetchPostListErrorAction;;