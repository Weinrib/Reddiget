import { Post } from "../../types";
import { DismissPostItemAction, DISMISS_POST_ITEM, FetchPostListAction, FetchPostListErrorAction, FetchPostListSuccessAction, FETCH_POST_LIST, FETCH_POST_LIST_ERROR, FETCH_POST_LIST_SUCCESS, SelectPostItemAction, SELECT_POST_ITEM } from "./types";

export const fetchPostList = (): FetchPostListAction => {
    return {
        type: FETCH_POST_LIST,
        payload: null
    };
};

export const fetchPostListSuccess = (data: any): FetchPostListSuccessAction => {
    return {
        type: FETCH_POST_LIST_SUCCESS,
        payload: data
    };
};

export const fetchPostListError = (): FetchPostListErrorAction => {
    return {
        type: FETCH_POST_LIST_ERROR,
        payload: null
    };
};

export const selectPostItem = (post: Partial<Post>): SelectPostItemAction => {
    return {
        type: SELECT_POST_ITEM,
        payload: post
    };
};

export const dismissPostItem = (postId: string): DismissPostItemAction => {
    return {
        type: DISMISS_POST_ITEM,
        payload: postId
    };
};