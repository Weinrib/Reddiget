import { Post } from "../../types";
import { DismissPostItemAction, DismissPostListAction, DismissSelectedPostAction, DISMISS_POST_ITEM, DISMISS_POST_LIST, DISMISS_SELECTED_POST, FetchPostListAction, FetchPostListErrorAction, FetchPostListSuccessAction, FETCH_POST_LIST, FETCH_POST_LIST_ERROR, FETCH_POST_LIST_SUCCESS, SelectPostItemAction, SELECT_POST_ITEM } from "./types";

export const fetchPostList = (pageBefore: string | null, pageAfter: string | null): FetchPostListAction => {
    return {
        type: FETCH_POST_LIST,
        payload: {
            pageBefore,
            pageAfter
        }
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

export const dismissPostList = (pageAfter: string): DismissPostListAction => {
    return {
        type: DISMISS_POST_LIST,
        payload: {
            pageBefore: null,
            pageAfter
        }
    };
};

export const dismissSelectedPost = (): DismissSelectedPostAction => {
    return {
        type: DISMISS_SELECTED_POST
    };
};