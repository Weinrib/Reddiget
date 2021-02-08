import { Action } from 'redux';
import { Page, Post } from '../../types';

export const FETCH_POST_LIST = "FETCH_POST_LIST";
export const FETCH_POST_LIST_SUCCESS = "FETCH_POST_LIST_SUCCESS";
export const FETCH_POST_LIST_ERROR = "FETCH_POST_LIST_ERROR";

export const SELECT_POST_ITEM = "SELECT_POST_ITEM";
export const DISMISS_POST_ITEM = "DISMISS_POST_ITEM";

export const IMAGE_IS_NSFW = 'nsfw';
export const IMAGE_DEF = 'default';
export const IMAGE_SELF = 'self';

export const IMAGES_TO_BE_REPLACED_WITH_PLACEHOLDER_ON_LISTING = [IMAGE_IS_NSFW, IMAGE_DEF, IMAGE_SELF];

export const IMAGES_TO_BE_REPLACED_WITH_PLACEHOLDER_ON_DETAIL = [IMAGE_DEF, IMAGE_SELF];

export const GIFV_EXTENSION = '.gifv';
export const MP4_EXTENSION = '.mp4';

export interface PostListState {
    loading: boolean;
    selectedPost: Partial<Post> | null;
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

export interface SelectPostItemAction extends Action {
    type: typeof SELECT_POST_ITEM;
    payload: Partial<Post>;
};

export interface DismissPostItemAction extends Action {
    type: typeof DISMISS_POST_ITEM
    payload: string;
};

export type PostListAction =  FetchPostListAction | FetchPostListSuccessAction | FetchPostListErrorAction | SelectPostItemAction | DismissPostItemAction;